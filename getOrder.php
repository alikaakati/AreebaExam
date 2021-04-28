<?php
$sql = "SELECT * FROM orders ORDER BY submitted DESC LIMIT 1";
$get_order = $conn->prepare($sql);
?>