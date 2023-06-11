<?php
class connect
{
    private $dbusername = "root";
    private $dbhost = "localhost";
    private $dbpassword = "";
    private $dbname = "frienddb";
    protected function dbconnection()
    {
        $pdo = new PDO("mysql:host=" . $this->dbhost . ";dbname=" . $this->dbname, $this->dbusername, $this->dbpassword);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $pdo;
    }
}
