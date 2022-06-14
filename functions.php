<?php
session_start();

$meth = $_GET["func"];
$id = $_GET["num"];

if ($meth == "set_val"){
    echo "value saved";
    $_SESSION["val1"] = $_GET["val"];
}
elseif($meth == "get_val" && $_GET["acces"]==$id){
    $_SESSION["val1"];
}
else{
    switch $id{
        case 1:
            $_SESSION["val1"] = " ";
            break;
        case 2:
            $_SESSION["val1"] = " ";
            break;
        case 3:
            $_SESSION["val1"] = " ";
            break;
    }
}





?>