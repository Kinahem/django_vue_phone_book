import uuid
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from rest_framework_simplejwt.tokens import RefreshToken

from django.db.models import signals
from .tasks import send_welcome_email


class UserManager(BaseUserManager):
    def create_user(self, username, email, password):
        if username is None:
            raise TypeError("NO username.")
        if email is None:
            raise TypeError("NO email.")
        if password is None:
            raise TypeError("NO password.")

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, password):
        if password is None:
            raise TypeError("No password.")

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):

    GENDER_CHOICES = (
        ("M", "Male"),
        ("F", "Female"),
        ("H", "Boeing AH-64 Apache"),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(db_index=True, unique=True)
    username = models.CharField(db_index=True, max_length=255, unique=True)
    full_name = models.TextField(max_length=2000, null=True)
    birth_date = models.DateField(null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    objects = UserManager()

    def __str__(self):
        string = self.email if self.email != "" else self.get_full_name()
        return f"{self.id} {string}"

    @property
    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {"refresh": str(refresh), "access": str(refresh.access_token)}

    def get_full_name(self):
        return self.full_name

    def get_username(self):
        return self.email  # I hope no one will see that


def user_post_save(sender, instance, signal, *args, **kwargs):
    send_welcome_email.apply_async(args=(instance.pk,), queue="email_queue")


signals.post_save.connect(user_post_save, sender=User)
