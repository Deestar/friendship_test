<?php
if (!isset($_POST['cid'])) {
    header('location:http://localhost/projects/friend_challenge/react/challenge/');
// }
if (!isset($_SERVER['HTTP_KEY'])) {
    echo false;
} elseif ($_SERVER['HTTP_KEY'] != '1212fck') {
    echo 0;
} else {
    include_once "autoload.php";
    $id = $_POST['cid'];
    $score = $_POST['score'];
    $send = new sendscorecontrol($id, $score);
    echo json_encode($send->sendScore());
}
