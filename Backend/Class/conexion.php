<?php
    class cconexion{
         
       

        public static function conexionDB(){

            $host = "localhost";
            $dbname = "gamestoreDB";
            $username = "postgres";
            $password = "password";
            try{
            
                $conn = new PDO("pgsql:host=$host; dbname =$dbname", $username,$password);
                echo "se conecto correctamente a la Base de datos ";
            
            }
            catch(PDOException $exp){
                echo ("no se pudo conectar a la base de datos, $exp");
            
            }
            
            return $conn;
            }
            



}



    ?>





