#!/bin/bash
set -e

echo "Waiting for PostgreSQL..."
until pg_isready -h db -U "${DB_USER:-allihtech}"; do
  sleep 1
done

echo "Running migrations..."
python manage.py migrate --noinput

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Compiling translations..."
python manage.py compilemessages || true

exec "$@"
