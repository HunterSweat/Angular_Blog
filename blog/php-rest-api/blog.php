<?php

    header("Access-Control-Allow-Orgin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include_once "./dbconnect.php";
    include_once "./database.php";

    $database = new Database();
    $db = $database->getConnection();

    $items = new Blog($db);
    $stmt = $items->getBlog();
    $itemCount = $stmt->rowCount();

    // echo json_encode($itemCount) . "\n" . "";

?>