<?php
if (!isset($_POST['name'])) {
    header('location:http://localhost/projects/friend_challenge/react/challenge/');
}
if (!isset($_SERVER['HTTP_KEY'])) {
    echo false;
} elseif ($_SERVER['HTTP_KEY'] != '1212fck') {
    echo 0;
} else {
    $uname = $_POST['name'];
    include "autoload.php";
    $obj = new getnamecontrol($uname);
    $response = $obj->insertUser();
    echo json_encode($response);
}
