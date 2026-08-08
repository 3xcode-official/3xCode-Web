# 3xCode Landing Page

## Stack
- HTML5
- CSS3
- JavaScript
- PHP contact handler
- Optional MySQL schema

## Run locally
Because PHP is used for the contact form, open the project through a PHP server.

Example:
php -S localhost:8000

Then visit:
http://localhost:8000/

## Contact form
Edit `php/contact.php` and replace:
hello@3xcode.com
with the real 3xCode email address.

For production email delivery, use SMTP/PHPMailer rather than relying on `mail()`.

## MySQL
The landing page does not need MySQL unless you want to store contact messages. The optional schema is in:
database/3xcode.sql
