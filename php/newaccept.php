<?php
if (!isset($_POST['refid'])) {
    header('location:http://localhost/projects/friend_challenge/react/challenge/');
}
if (!isset($_SERVER['HTTP_KEY'])) {
    echo false;
} elseif ($_SERVER['HTTP_KEY'] != '1212fck') {
    echo 0;
} else {
    include_once "autoload.php";
    $name = $_POST["name"];
    $ref_id = $_POST["refid"];
    $sendChallenge = new addchallengecontrol($name, $ref_id);
    echo json_encode($sendChallenge->Insertchallenge());
}
