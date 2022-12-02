
<?php

function conectar_PostgreSQL( $usuario, $pass, $host, $bd )
    {
         $conexion = pg_connect( "user=".$usuario." postgresql".
                                "password=".$pass." password".
                                "host=".$host." localhost".
                                "dbname=".$bd."StoreGames"
                               ) or die( "Error al conectar: ".pg_last_error() );
        return $conexion;
    }


    function insertarPersona( $conexion, $id, $nombre )
    {
        $sql = "INSERT INTO vg.persona VALUES (".$id.", '".$nombre."')";
        // Ejecutamos la consulta (se devolverá true o false):
         return pg_query( $conexion, $sql );
    }



 ?>   