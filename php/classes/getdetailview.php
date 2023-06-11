<?php
include_once "model.php";
class getdetailview extends model
{
    private $id;
    public function __construct($id)
    {
        $this->id = $id;
    }
    public function getdetails()
    {
        $response = $this->getUdetails($this->id);
        return $response;
    }
}
