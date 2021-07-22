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
          
          //Create Subscriber/Mailing List
        public function createMail(){
            $sqlQuery = "INSERT INTO".$this->db_table_mail."
                SET
                    name = :name,
                    email = :email,
                    created = :created";
            
            $stmt = $this->conn->prepare($sqlQuery);

            //Sanitize
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->name=htmlspecialchars(strip_tags($this->email));
            $this->name=htmlspecialchars(strip_tags($this->created));

            //Bind Data
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":email", $this->email);
            $stmt->bindParam(":created", $this->created);

            if($stmt->execute()){
                return true;
            }
            return false;
        }
    }
   
?>
