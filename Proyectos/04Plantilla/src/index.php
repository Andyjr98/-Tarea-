<?php
include '../config/config.php';
include '../controllers/UnidadMedidaController.php';

// Obtener el método HTTP y la acción
$method = $_SERVER['REQUEST_METHOD'];
$action = isset($_GET['action']) ? $_GET['action'] : '';

// Instanciar el controlador
$controller = new UnidadMedidaController($conn);

// Manejar las solicitudes
switch ($method) {
    case 'POST':
        if ($action == 'insertar') {
            $controller->insertar();
        } elseif ($action == 'actualizar') {
            $controller->actualizar();
        }
        break;

    case 'DELETE':
        if ($action == 'eliminar') {
            $controller->eliminar();
        }
        break;
    
    default:
        echo json_encode(["error" => "Invalid request"]);
        break;
}
?>
