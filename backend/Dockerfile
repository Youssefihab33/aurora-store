FROM python:3.9-slim-buster

WORKDIR /app/src

COPY ./ ./
RUN pip install --no-cache-dir -r requirements.txt

RUN python manage.py collectstatic --noinput

RUN apt-get update && apt-get install -y nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000
CMD ["gunicorn", "--bind=0.0.0.0:8000", "core.wsgi:application"]
