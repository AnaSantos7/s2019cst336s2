<?php
include "./connect.php";

$db= getDBConnection("cinder");
$query="select * from user";
$statement = $db->prepare($query);
$statement -> execute();

$records = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($records);
?>