<?php
if (!isset($_POST['uid'])) {
    header('location:http://localhost/projects/friend_challenge/react/challenge/');
}
if (!isset($_SERVER['HTTP_KEY'])) {
    echo false;
} elseif ($_SERVER['HTTP_KEY'] != '1212fck') {
    echo 0;
} else {
    include_once "autoload.php";
    $id = $_POST["uid"];
    $question = $_POST["question"];
    $right = $_POST["right"];
    $wrong = $_POST["wrong"];
    $add = new sendcustomcontrol($id, $question, $right, $wrong);
    echo json_encode($add->sendCustom());
}
