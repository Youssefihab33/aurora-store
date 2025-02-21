FROM python:3.9-slim-buster

WORKDIR /app

COPY . .
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

RUN python manage.py collectstatic --noinput

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN apt-get update && apt-get install -y nginx

EXPOSE 8000
CMD ["gunicorn", "--bind=0.0.0.0:8000", "core.wsgi:application"]
