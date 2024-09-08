<?php
require_once '../models/UnidadMedida.php';

class UnidadMedidaController {
    private $db;
    private $unidadMedida;

    public function __construct($db) {
        $this->db = $db;
        $this->unidadMedida = new UnidadMedida($this->db);
    }

    public function update($id, $nombre) {
        $this->unidadMedida->id = $id;
        $this->unidadMedida->nombre = $nombre;

        if ($this->unidadMedida->update()) {
            echo json_encode(array("message" => "Unidad de medida actualizada."));
        } else {
            echo json_encode(array("message" => "No se pudo actualizar la unidad de medida."));
        }
    }

    public function delete($id) {
        $this->unidadMedida->id = $id;

        if ($this->unidadMedida->delete()) {
            echo json_encode(array("message" => "Unidad de medida eliminada."));
        } else {
            echo json_encode(array("message" => "No se pudo eliminar la unidad de medida."));
        }
    }
}

// Routing example
header("Content-Type: application/json");
$controller = new UnidadMedidaController($pdo);

$method = $_SERVER['REQUEST_METHOD'];
$id = isset($_GET['id']) ? $_GET['id'] : null;

if ($method == 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $controller->update($data->id, $data->nombre);
} elseif ($method == 'DELETE') {
    $controller->delete($id);
}
?>
