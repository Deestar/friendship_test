<?php
include_once "model.php";
class addchallengecontrol extends model
{
    private $name;
    private $ref_id;
    public function __construct($name, $ref)
    {
        $this->name = $name;
        $this->ref_id = $ref;
    }
    private function validateName()
    {
        if (!preg_match("/^([A-Za-z0-9' ]+)$/", $this->name)) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }
    private function getActualLength()
    {
        $str = preg_replace("/[^A-Za-z0-9 ]/", "", $this->name);
        if (strlen($str) < 3) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }
    public function Insertchallenge()
    {
        if (!$this->validateName()) {
            return ["error" => true, "message" => "Use letters"];
        } elseif (!$this->getActualLength()) {
            return ["error" => true, "message" => "Use atleast 3 letter"];
        } elseif ($this->getChallengeId() === false) {
            return ["error" => true, "message" => "connection 1 failure"];
        } else {
            $no = $this->getChallengeId();
            if (!$this->sendChallenge($this->ref_id, $this->name, $no)) {
                return ["error" => true, "message" => "connection failure"];
            } else {
                return ["error" => false, "id" => $no];
            }
        }
    }
}
