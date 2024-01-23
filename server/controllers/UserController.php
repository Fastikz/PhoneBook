<?php

namespace Controller;

use Model\UserModel;

class UserController
{
    private $userModel;
    private array $postData;

    public function __construct($userModel, $postData)
    {
        $this->userModel = $userModel;
        $this->postData = is_array($postData) ? $postData : [];
    }

    public function add()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $name = $this->postData['name'] ?? '';
            $phone = $this->postData['phone'] ?? '';
            $gmail = $this->postData['mail'] ?? '';

            $result = $this->userModel->addUser($name, $phone, $gmail);
            echo $result;
        } else {
            echo "Invalid Request Method";
        }
    }

    public function search()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $searchText = $this->postData['searchText'] ?? '';
            $results = $this->userModel->searchUsers($searchText);
            echo json_encode($results);
        } else {
            echo json_encode(["error" => "Invalid Request Method"]);
        }
    }

    public function getAll()
    {
        $allUsers = $this->userModel->getAllUsers();
        echo json_encode($allUsers);
    }

    public function delete()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        if ($data && isset($data["id"])) {
            $id = $data["id"];
            $result = $this->userModel->deleteUser($id);
            echo $result;
        }
    }
}