from django.db import models


class Contact(models.Model):
    owner = models.ForeignKey('users.User', related_name='contacts', on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    phone = models.IntegerField(blank=True, null=True)
    email = models.EmailField(blank=True,null=True)
    info = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        ordering = ('-full_name',)

    def __str__(self):
        return self.full_name