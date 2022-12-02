<?php
include_once('class-persona.php');
CLass Cliente extends Persona{
    protected $fechaRegistro;
    protected $direccion;
    protected $idtaller;

    public function __construct($primerNombre,$segundoNombre,$primerApellido,$SegundoApellido,$edad,$identidad,$fechaRegistro, $direccion,$idtaller){
        parent::__construct($primerNombre,$segundoNombre,$primerApellido,$SegundoApellido,$edad,$identidad);
        $this->fechaRegistro = $fechaRegistro;
        $this->direccion = $direccion;
        $this->idtaller = $idtaller;


        

    }


    /**
     * Get the value of fechaRegistro
     */ 
    public function getFechaRegistro()
    {
        return $this->fechaRegistro;
    }

    /**
     * Set the value of fechaRegistro
     *
     * @return  self
     */ 
    public function setFechaRegistro($fechaRegistro)
    {
        $this->fechaRegistro = $fechaRegistro;

        return $this;
    }

    /**
     * Get the value of direccion
     */ 
    public function getDireccion()
    {
        return $this->direccion;
    }

    /**
     * Set the value of direccion
     *
     * @return  self
     */ 
    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;

        return $this;
    }

    /**
     * Get the value of idtaller
     */ 
    public function getIdtaller()
    {
        return $this->idtaller;
    }

    /**
     * Set the value of idtaller
     *
     * @return  self
     */ 
    public function setIdtaller($idtaller)
    {
        $this->idtaller = $idtaller;

        return $this;
    }


   


    public function guardarCliente(){
        $contenidoArchivo = file_get_contents("../Data/clientes.json");
        $clientes = json_decode($contenidoArchivo, true);
        $clientes[] = array(
           'primerNombre'=> $this->primerNombre, 
           'segundoNombre'=> $this->segundoNombre,
           'primerApellido'=> $this->primerApellido ,
           'SegundoApellido'=> $this->SegundoApellido ,
           'edad'=> $this->edad,
           'identidad'=> $this->identidad,
           'fechaRegistro'=>$this->fechaRegistro ,
           'direccion'=>$this->direccion ,
           'idtaller'=>$this->idtaller ,


        );
        $archivo = fopen("../Data/clientes.json","w");
        fwrite($archivo, json_encode($clientes));
        fclose($archivo);
   
     }
     public static function obtenerCliente(){
       $contenidoArchivo = file_get_contents("../Data/clientes.json");
       echo $contenidoArchivo;
       
     }
     public static function obtenerClientes($indice){
       $contenidoArchivo = file_get_contents("../Data/clientes.json");
       $clientes = json_decode($contenidoArchivo, true);
       echo json_encode( $clientes[$indice]);
     //  echo $contenidoArchivo;
       
     }
     public function actualizarCliente($indice){
       $contenidoArchivo = file_get_contents("../Data/clientes.json");
       $clientes = json_decode($contenidoArchivo, true);
       $cliente = array(
        'primerNombre'=> $this->primerNombre, 
        'segundoNombre'=> $this->segundoNombre,
        'primerApellido'=> $this->primerApellido ,
        'segundoApellido'=> $this->SegundoApellido ,
        'edad'=> $this->edad,
        'identidad'=> $this->identidad,
        'fechaRegistro'=>$this->fechaRegistro ,
        'direccion'=>$this->direccion ,
        'idtaller'=>$this->idtaller ,

      
       );
       $clientes[$indice] = $cliente; 
       $archivo = fopen('../Data/clientes.json','w');
        fwrite($archivo, json_encode($clientes));
        fclose($archivo);
     }
     public static function eliminarCliente($indice){
       $contenidoArchivo = file_get_contents("../Data/clientes.json");
       $clientes = json_decode($contenidoArchivo, true);
       array_splice($clientes,$indice, 1);
       $archivo = fopen('../Data/clientes.json','w');
        fwrite($archivo, json_encode($clientes));
        fclose($archivo);
     }





}




?>