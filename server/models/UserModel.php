<?php

namespace Model;

use PDO;

class UserModel {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function addUser($name, $phone, $gmail) {
        try {
            $sql = "INSERT INTO users(name, phone, gmail) VALUES (:name, :phone, :gmail)";
            $stmt = $this->pdo->prepare($sql);
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':phone', $phone);
            $stmt->bindParam(':gmail', $gmail);
            $stmt->execute();
            return "Add DataBas";
        } catch(PDOException $e) {
            return "Error " . $e->getMessage();
        }
    }

    public function searchUsers($searchText) {
        try {
            $query = "SELECT * FROM users WHERE name LIKE ? OR phone LIKE ? OR gmail LIKE ? ORDER BY `id` DESC";
            $params = ["%" . $searchText . "%", "%" . $searchText . "%", "%" . $searchText . "%"];

            $stmt = $this->pdo->prepare($query);
            $stmt->execute($params);

            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $results;
        } catch(PDOException $e) {
            return ["error" => $e->getMessage()];
        }
    }

    public function getAllUsers() {
        try {
            $sql = "SELECT * FROM users ORDER BY `id` DESC";
            $stmt = $this->pdo->query($sql);
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $results;
        } catch(PDOException $e) {
            return ["error" => $e->getMessage()];
        }
    }

    public function deleteUser($id) {
        try {
            $sql = "DELETE FROM users WHERE id = :id";
            $stmt = $this->pdo->prepare($sql);
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);
            $stmt->execute();
            return "Date Delete.";
        } catch(PDOException $e) {
            return "Error: " . $e->getMessage();
        }
    }
}
