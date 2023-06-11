<?php
include_once "model.php";
class checkexistview extends model
{
    private $id;
    public function __construct($id)
    {
        $this->id = $id;
    }
    public function checkexist()
    {
        $response = $this->checkid($this->id);
        return $response;
    }
}
