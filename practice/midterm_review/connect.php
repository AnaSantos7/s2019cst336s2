<?php
function getDBConnection($dbName = ""){
    $host = "localhost";
    $dbName = "midterm_practice";
    $user = "asantos0";
    $pass = "";
    
    $dsn = "mysql:host=$host;dbname=$dbName";
    
    $query="select * from mp_product";
    $opt = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
    ];
    
    $pdo = new PDO($dsn, $user, $pass, $opt);
    return $pdo;
}
