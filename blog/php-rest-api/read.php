<?php

    header('Access-Control-Allow-Orgin: *');
    header('Content-Type: application/json; charset=UTF-8');

    include_once './database.php';
    include_once './blog.php';

    $database = new Database();
    $db = $database->getConnection();

    $items = new Blog($db);
    $stmt = $items->getBlog();
    $itemCount = $stmt->rowCount();

    // echo json_encode($itemCount);

    if($itemCount > 0){

        $blogArr = array();
       
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "title" => $title,
                "summary" => $summary,
                "link" => $link,
                "created" => $created
            );

            array_push($blogArr["body"], $e);
        }
        echo json_encode($blogArr);
        return $e;
    }

    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
    }

?>
