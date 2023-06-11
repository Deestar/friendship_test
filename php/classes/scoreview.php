<?php
include_once "model.php";
class scoreview extends model
{
    private $id;
    public function __construct($id)
    {
        $this->id = $id;
    }
    public function getLeadScores()
    {
        return $this->LeadScores($this->id);
    }
}
