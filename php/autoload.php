<?php
spl_autoload_register('Autoload');
function Autoload($classname)
{
    include "classes/" . $classname . ".php";
}
