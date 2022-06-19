from celery import shared_task, Task
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from datetime import datetime, timedelta, date
import random
import math
import string
from users.models import User
import numpy as np

channel_layer = get_channel_layer()


class CallbackTask(Task):
    def on_success(self, retval, task_id, args, kwargs):
        print(f"Task {task_id} is {retval}")


@shared_task(name="task1", base=CallbackTask)
def task1():
    first_number = random.randint(1, 20)
    second_number = random.randint(1, 20)
    result = math.pow(first_number, second_number)
    info = {
        'task_name': 'Random pow operation',
        'result': f"{first_number}^{second_number} = {result}",
        'finish time': datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
    }
    async_to_sync(channel_layer.group_send)('tasks', {'type': 'send_task_info', 'data': info})

    return f"{first_number}^{second_number} = {result}"


@shared_task(name="task2", base=CallbackTask)
def task2():
    rand_username = ''.join(
        np.random.choice(list(string.ascii_uppercase), random.randint(5, 10))
    )
    rand_email = rand_username + "@mail.com"
    rand_password = ''.join(
        np.random.choice(list(
            string.ascii_uppercase 
            + string.digits
        ), random.randint(5, 10))
    )
    rand_full_name = (
        ''.join(
            np.random.choice(list(string.ascii_lowercase), random.randint(5, 10))
        ).capitalize() 
        + ''.join(
            np.random.choice(list(string.ascii_lowercase), random.randint(5, 10))
        ).capitalize()
    ) 
    rand_birth_date = (
        date(1950, 1, 1) 
        + timedelta(days=random.randint(1, 364*50))
    ).strftime("%Y-%m-%d")
    rand_gender = random.choice(('M','F'))

    user = User.objects.create_user(
        username=rand_username,
        email=rand_email,
        password=rand_password
    )
    user.full_name = rand_full_name
    user.birth_date = rand_birth_date
    user.gender = rand_gender
    user.save(update_fields=['full_name', 'birth_date', 'gender'])

    info = {
        'task_name': 'Random user creation',
        'result': f"User {rand_username} created",
        'finish time': datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
    }

    async_to_sync(channel_layer.group_send)('tasks', {'type': 'send_task_info', 'data': info})

    return f"User {rand_username} created"