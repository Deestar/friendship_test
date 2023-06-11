<?php
if (!isset($_POST['id'])) {
    header('location:http://localhost/projects/friend_challenge/react/challenge/');
}
if (!isset($_SERVER['HTTP_KEY'])) {
    echo 0;
} elseif ($_SERVER['HTTP_KEY'] != '1212fck') {
    echo 0;
} else {
    include_once "autoload.php";
    $id = $_POST['id'];
    $score = new scoreview($id);
    echo json_encode($score->getLeadScores());
}
