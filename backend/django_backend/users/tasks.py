import logging
 
from django.urls import reverse
from django.core.mail import send_mail
from django.contrib.auth import get_user_model
from celery import shared_task
 
 
@shared_task
def send_welcome_email(user_id):
    UserModel = get_user_model()
    try:
        user = UserModel.objects.get(pk=user_id)
        print(user.email)
        send_mail(
            'Thank you for registering to our site',
            ' it  means a world to us ',
            'misha.turkin.2000@gmail.com',
            [user.email],
            fail_silently=False,
        )
    except UserModel.DoesNotExist:
        logging.warning("Tried to send welcome email to non-existing user '%s'" % user_id)