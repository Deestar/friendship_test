<?php
include_once 'connectdb.php';
class model extends connect
{
    protected function chequeunq($id)
    {
        $sql = "SELECT COUNT(u_id) FROM users WHERE u_id =?";
        $stmt = $this->dbconnection()->prepare($sql);
        $stmt->execute([$id]);
        $no = $stmt->fetch();
        return $no['COUNT(u_id)'];
    }
    protected function addNewUser($name, $id)
    {
        $sql = 'INSERT into users (name,u_id) VALUES (?,?)';
        $stmt = $this->dbconnection()->prepare($sql);
        if (!$stmt) {
            return 0;
        } else {
            $stmt->execute([$name, $id]);
            $stmt = null;
            return $id;
        }

    }
    protected function addCustomQuestion($id, $question, $right, $wrong)
    {
        $sql = "INSERT INTO custom_question VALUES(?,?,?,?)";
        $stmt = $this->dbconnection()->prepare($sql);
        if (!$stmt) {
            return 0;
        } else {
            $stmt->execute([$id, $right, $wrong, $question]);
            return true;
        }
    }
    protected function addChoices($str, $id)
    {
        $sql = "UPDATE users SET question = ? WHERE u_id = ?";
        $stmt = $this->dbconnection()->prepare($sql);
        if (!$stmt) {
            return 0;
        } else {
            $stmt->execute([$str, $id]);
            return true;
        }
    }
    protected function checkid($id)
    {
        $sql = "SELECT * FROM users WHERE u_id =?";
        $stmt = $this->dbconnection()->prepare($sql);
        if (!$stmt) {
            return ["error" => true, "message" => "connection"];
        } else {
            $stmt->execute([$id]);
            $no = $stmt->rowCount();
            if ($no < 1) {
                return ["error" => true, "message" => "unexist"];
            } else {
                return ["error" => false, "message" => "exist"];
            }
        }
    }
    protected function getUdetails($id)
    {
        $sql = "SELECT users.name, users.question AS choosen,custom_question.question,custom_question.WrongOpt,custom_question.RightOpt FROM users JOIN
custom_question ON users.u_id = custom_question.user_id WHERE users.u_id =?";
        $stmt = $this->dbconnection()->prepare($sql);
        $stmt->execute([$id]);
        if (!$stmt) {
            return ["error" => true, "type" => "connection"];
        } else {
            $dataArray = $stmt->fetch();
            $no = $stmt->rowCount();
            if ($no < 1) {
                return ["error" => true, "type" => "exists"];
            } else {
                return $dataArray;
            }
        }
    }
    protected function sendChallenge($ref, $name, $unq)
    {
        $sql = "INSERT INTO challengers (ref_id,name,c_id) VALUES(?,?,?)";
        $stmt = $this->dbconnection()->prepare($sql);
        if (!$stmt) {
            return false;
        } else {
            $stmt->execute([$ref, $name, $unq]);
            return true;
        }
    }
    protected function getChallengeId()
    {
        $sql = "SELECT COUNT(c_id) FROM challengers";
        $stmt = $this->dbconnection()->query($sql);
        if (!$stmt) {
            return false;
        } else {
            $no = $stmt->fetch();
            return $no["COUNT(c_id)"];
        }
    }
    protected function sendChallengeScore($id, $score)
    {
        $sql = "UPDATE challengers SET score =$score WHERE c_id = $id";
        $stmt = $this->dbconnection()->query($sql);
        if (!$stmt) {
            return false;
        } else {
            return true;
        };
    }
    protected function LeadScores($id)
    {
        $sql = "SELECT name,score FROM challengers WHERE ref_id =? ORDER BY score DESC";
        $stmt = $this->dbconnection()->prepare($sql);
        if (!$stmt) {
            return ["error" => true, "message" => "Connection Error Please Click Refresh"];
        } else {
            $stmt->execute([$id]);
            $response = $stmt->fetchAll();
            return ["error" => false, "score" => $response];
        }
    }
};
