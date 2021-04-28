<?php
$sql = "INSERT INTO orders(submitted) VALUES(?)";
$insert_user = $conn->prepare($sql);
?>