<?php
include_once 'model.php';
class sendcustomcontrol extends model
{
    private $id;
    private $question;
    private $right;
    private $wrong;
    private $choice;
    public function __construct($id, $question, $right, $wrong)
    {
        $this->id = $id;
        $this->question = $question;
        $this->right = $right;
        $this->wrong = $wrong;
    }
    private function CheckLength()
    {
        if (empty($this->id) || empty($this->question) || empty($this->right) || empty($this->wrong)) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }
    private function valInput()
    {
        if (!preg_match("/[A-Za-z0-9]/", $this->question) || !preg_match("/[A-Za-z0-9]/", $this->right) || !preg_match("/[A-Za-z0-9]/", $this->wrong)) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }
    public function sendCustom()
    {
        if ($this->CheckLength() && $this->valInput()) {
            $resp = $this->addCustomQuestion($this->id, $this->question, $this->right, $this->wrong, $this->choice);
            return $resp;
        } else {
            return 0;
        }
    }

}
