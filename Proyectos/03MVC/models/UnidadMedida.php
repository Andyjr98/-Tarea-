<?php
require_once '../config/config.php';

class UnidadMedida {
    private $conn;
    private $table = 'unidad_medida'; // Cambia esto por el nombre real de tu tabla

    public $id;
    public $nombre;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function update() {
        $query = "UPDATE " . $this->table . " SET nombre = :nombre WHERE id = :id";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':nombre', $this->nombre);
        $stmt->bindParam(':id', $this->id);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    public function delete() {
        $query = "DELETE FROM " . $this->table . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':id', $this->id);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
}
?>
