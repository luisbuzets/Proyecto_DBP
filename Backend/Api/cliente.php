
<?php
header("content-Type: application/json");
include_once("../Class/class-clientes.php");
include_once("../Class/class-persona.php");

include_once("../Class/conexion.php");
    cconexion::conexionDB();


//echo "metodo HTTP: ".$_SERVER['REQUEST_METHOD'];

//echo 'informacion:' . file_get_contents('php://input');

switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'),true);
        $cliente = new Cliente($_POST["primerNombre"],$_POST["segundoNombre"],$_POST["primerApellido"],$_POST["segundoApellido"],$_POST["edad"],$_POST["identidad"],$_POST["fechaRegistro"],$_POST["direccion"],$_POST["idtaller"]);

        $cliente->guardarCliente();
        $resultado["mensaje"] = "guardar Cliente, informacion: " . json_encode($_POST);
       echo json_encode($resultado);
        break;
    case 'GET':
        if(isset($_GET['id'])){
            Cliente::obtenerClientes($_GET['id']);
       // $resultado["mensaje"] = " retornar el clientes con el id: " . $_GET['id'];
      //  echo json_encode($resultado);
        }else{
            Cliente::obtenerCliente();
      //  $resultado["mensaje"] = "retornar todos los clientes";
       // echo json_encode($resultado);
        }

        break;
    case 'PUT':
        $_PUT = json_decode(file_get_contents('php://input'),true);
        $cliente = new Cliente($_PUT["primerNombre"],$_PUT["segundoNombre"],$_PUT["primerApellido"],$_PUT["segundoApellido"]
        ,$_PUT["edad"],$_PUT["identidad"],$_PUT["fechaRegistro"],$_PUT["direccion"],$_PUT["idtaller"]);
        $cliente->actualizarCliente($_GET['id']);

        $resultado["mensaje"] = "actualizar un cliente con el id: " . $_GET['id'].
                                 " , informacion a actualizar: " . json_encode($_PUT);
        echo json_encode($resultado);
        break;
    case 'DELETE':
        Cliente::eliminarCliente($_GET['id']);
        
        $resultado["mensaje"] = "eliminar un cliente con el id: " . $_GET['id'];
        echo json_encode($resultado);
        break;      
      
}





?>