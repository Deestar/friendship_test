<?php
include_once 'model.php';
class getnamecontrol extends model
{
    private $name;
    public function __construct($name)
    {
        $this->name = $name;
    }
    private function genId()
    {
        $str = '1234567890abcdefghijklmnopqrstuvwxyz';
        $shuffled = str_shuffle($str);
        $uid = substr($shuffled, 4, 5);
        return $uid;
    }
    private function genunique()
    {
        $uid = $this->genId();
        while ($this->chequeunq($uid) != 0) {
            $uid = $this->genId();
        }
        return $uid;
    }
    private function checklength()
    {
        $name = preg_replace("/[^A-Za-z ]/", "", $this->name);
        if (strlen($name) < 3) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }
    private function Nosymbol()
    {
        if (preg_match("/[[!@#$%^&*()_+=\.<>{}()[\'']/", $this->name)) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }
    private function valdInput()
    {
        if (!preg_match("/[A-Za-z0-9]/", $this->name)) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }
    public function insertUser()
    {
        if (!$this->checklength()) {
            $resp = ["message" => "Dont use symbols use atleast 3 letters", "error" => true];
        } else if (!$this->valdInput()) {
            $resp = ["message" => "Please use letters", "error" => true];
        } elseif (!$this->Nosymbol()) {
            $resp = ["message" => "Dont use symbol please", "error" => true];
        } else {
            $name = preg_replace("/[^a-zA-Z0-9]/", "", $this->name);
            $response = $this->addNewUser($name, $this->genunique());
            if ($response == false) {
                $resp = ["message" => "check your mobile connection", "error" => true];
            } else {
                $resp = ["error" => false, "id" => $response];
            }
        }
        return $resp;
    }
}
