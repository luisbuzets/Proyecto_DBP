<?php

 abstract class Persona{
    protected $primerNombre;
    protected $segundoNombre;
    protected $primerApellido;
    protected $SegundoApellido;
    protected $edad;
    protected $identidad;

    public function __construct($primerNombre,$segundoNombre,$primerApellido,$SegundoApellido,$edad,$identidad ){
        
        $this->primerNombre = $primerNombre;
        $this->segundoNombre= $segundoNombre;
        $this->primerApellido = $primerApellido;
        $this->SegundoApellido = $SegundoApellido;
        $this->edad = $edad;
        $this->identidad = $identidad;
   
       }
   


    /**
     * Get the value of primerNombre
     */ 
    public function getPrimerNombre()
    {
        return $this->primerNombre;
    }

    /**
     * Set the value of primerNombre
     *
     * @return  self
     */ 
    public function setPrimerNombre($primerNombre)
    {
        $this->primerNombre = $primerNombre;

        return $this;
    }

    /**
     * Get the value of segundoNombre
     */ 
    public function getSegundoNombre()
    {
        return $this->segundoNombre;
    }

    /**
     * Set the value of segundoNombre
     *
     * @return  self
     */ 
    public function setSegundoNombre($segundoNombre)
    {
        $this->segundoNombre = $segundoNombre;

        return $this;
    }

    /**
     * Get the value of primerApellido
     */ 
    public function getPrimerApellido()
    {
        return $this->primerApellido;
    }

    /**
     * Set the value of primerApellido
     *
     * @return  self
     */ 
    public function setPrimerApellido($primerApellido)
    {
        $this->primerApellido = $primerApellido;

        return $this;
    }

    /**
     * Get the value of SegundoApellido
     */ 
    public function getSegundoApellido()
    {
        return $this->SegundoApellido;
    }

    /**
     * Set the value of SegundoApellido
     *
     * @return  self
     */ 
    public function setSegundoApellido($SegundoApellido)
    {
        $this->SegundoApellido = $SegundoApellido;

        return $this;
    }

    /**
     * Get the value of edad
     */ 
    public function getEdad()
    {
        return $this->edad;
    }

    /**
     * Set the value of edad
     *
     * @return  self
     */ 
    public function setEdad($edad)
    {
        $this->edad = $edad;

        return $this;
    }

    /**
     * Get the value of identidad
     */ 
    public function getIdentidad()
    {
        return $this->identidad;
    }

    /**
     * Set the value of identidad
     *
     * @return  self
     */ 
    public function setIdentidad($identidad)
    {
        $this->identidad = $identidad;

        return $this;
    }
}




?>