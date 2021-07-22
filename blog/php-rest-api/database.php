<?php
    header('Access-Control-Allow-Orgin: *');
    include_once './dbconnect.php';

    

    class Blog{
        // Connection
        private $conn;

        //Table
        private $db_table = "Blog";

        //Columns
        private $id;
        private $title;
        private $summary;
        private $link;
        private $created;

        //Db connection
        public function __construct($db){
            $this->conn = $db;
            // echo "connection good \n";
        }

        //Get All Data
        public function getBlog(){
            $sqlQuery = "SELECT id, title, summary, link, created FROM " . $this->db_table . "";
            
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }
    }
   
?>