<?php

require 'vendor/autoload.php';

use Symfony\Component\Dotenv\Dotenv;

require_once 'Router.php';

$dotenv = new Dotenv();
$dotenv->loadEnv(__DIR__ . '/.env');

$pdo = new PDO(
    "mysql:host=" . $_ENV['DB_HOST'] . ";port=" . $_ENV['DB_PORT'] . ";dbname=" . $_ENV['DB_NAME'],
    $_ENV['DB_USER'],
    $_ENV['DB_PASSWORD']
);

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$routes = [
    'add' => 'UserController@add',
    'search' => 'UserController@search',
    'getAll' => 'UserController@getAll',
    'delete' => 'UserController@delete',
];

$postData = json_decode(file_get_contents('php://input'), true);

$router = new Router($routes, $pdo);
$action = $_GET['action'] ?? $postData['action'] ?? 'getAll';
$router->route($action, $postData);