<?php
$conn = new mysqli("localhost","root","","areebaexam");
if($conn -> connect_errno){
    echo "Failed to establish connection to the server";
    exit();
}
include './getOrder.php';
$get_order->execute();

if(mysqli_num_rows($get_order->get_result()) > 0){
    echo json_encode($row['ID']);
}
?>