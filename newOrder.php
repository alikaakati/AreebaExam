<?php
$conn = new mysqli("localhost","root","","areebaexam");
if($conn -> connect_errno){
    echo "Failed to establish connection to the server";
    exit();
}
include './insertOrder.php';
$string = date("Y/m/d");
$insert_user->bind_param("s", $string);
$insert_user->execute();
$res = $insert_user->insert_id;
echo json_encode($res);
?>