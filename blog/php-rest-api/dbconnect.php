<?php
    header('Access-Control-Allow-Orgin: *');
    class Database {
        private $host = "127.0.0.1";
        //To do inject envvar
        private $database_name = "phpapidb";
        private $username = "username";
        //To do inject envvar
        private $password = "password";

        public $conn;

        public function getConnection(){
            $this->conn = null;
            try{
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name, $this->username, $this->password);
                $this->conn->exec("set name utf8");
                // echo "Database connection good \n";
            }catch(PDOException $exception){
                echo "Database could not be connected: " . $exception->getMessage();
            }
            return $this->conn;
        }      
    }
   
    ?>
