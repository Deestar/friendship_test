<?php
include_once "model.php";
class sendscorecontrol extends model
{
    private $cid;
    private $score;
    public function __construct($id, $score)
    {
        $this->cid = $id;
        $this->score = $score;
    }
    public function sendScore()
    {
        $response = $this->sendChallengeScore($this->cid, $this->score);
        if (!$response) {
            return false;
        } else {
            return true;
        }
    }
}
