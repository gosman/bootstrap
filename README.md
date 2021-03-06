## About Bootstrap

Bootstrap is a starter Tailwind/Laravel admin panel application with user and role management.

## Installation instructions

1. Clone this repository

```shell
git clone https://github.com/gosman/bootstrap
```    

2. Change directory

```shell
cd bootstrap
```    

3. Update Composer

```shell
composer update
```     

4. Install NPM

```shell
npm install
```

5. Rename .env.example to .env

```shell
mv .env.example .env
```

6. Configure .env file with DB and App Settings [Reference](https://laravel.com/docs/8.x/configuration#environment-variable-types)


7. Generate application key

```shell
php artisan key:generate
``` 

8. Run migrations

```shell
php artisan migrate
``` 

9. Seed database

```shell
php artisan db:seed
``` 

## Login

If you followed the steps above, 2 default accounts will have been created.

**Admin account:**

`admin@example.com`

`Passw0rd`

**User account:**

`user@example.com`

`Passw0rd`

## Branding

**Replace the following files**

[/public/assets/images/favicon.ico](public/assets/images/favicon.ico)

[/public/assets/images/logo.png](public/assets/images/logo.png)

## Sidebar Menu

**Sidebar menu configuration file**

[/config/menu.php](config/menu.php)

**Sidebar icons**

[icons](https://heroicons.com/)

## Assets

**CSS** [/resources/css/app.css](resources/css/app.css)

**JS** [/resources/js/app.js](resources/js/app.js)

Changes made to these files need to compiled [Reference](https://laravel.com/docs/8.x/mix)

```shell
npm run dev
``` 

## Support

[Expert Digital Marketing](https://www.edm.ie/)
