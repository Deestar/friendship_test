<?php
include "model.php";
class addchoosencontrol extends model
{
    private $choiceNo;
    private $id;
    public function __construct($choices, $id)
    {
        $this->choiceNo = $choices;
        $this->id = $id;
    }
    public function insertChoice()
    {
        $response = $this->addChoices($this->choiceNo, $this->id);
        return $response;
    }
}
