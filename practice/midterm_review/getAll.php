<?php
include "./connect.php";

$db= getDBConnection("midterm_practice");
$query="select * from mp_product";
$statement = $db->prepare($query);
$statement -> execute();

$records = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($records);
?>