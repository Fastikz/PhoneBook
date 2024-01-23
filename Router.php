<?php

use Model\UserModel;
use Controller\UserController;

require_once __DIR__ . '/server/controllers/UserController.php';
require_once __DIR__ . '/server/models/UserModel.php';

class Router
{
    private $routes;
    private $pdo;

    public function __construct($routes, $pdo)
    {
        $this->routes = $routes;
        $this->pdo = $pdo;
    }

    public function route($action, $postData)
    {
        if (isset($this->routes[$action])) {
            $controllerAction = explode('@', $this->routes[$action]);

            if (count($controllerAction) === 2) {
                $controllerName = $controllerAction[0];
                $methodName = $controllerAction[1];

                $controller = new UserController(new UserModel($this->pdo), $postData);
                $controller->$methodName();
            }
        }
    }
}