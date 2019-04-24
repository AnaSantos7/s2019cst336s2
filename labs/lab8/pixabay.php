<?php

$apiKey = "12296225-b76ab65e270815415ac744582";
$query = "otter";

$cSession = curl_init();

curl_setopt($cSession,CURLOPT_URL,"https://pixabay.com/api/?key=$apiKey&q=$query&image_type=photo&orientation=horizontal&safesearch=true&per_page=9");
curl_setopt($cSession,CURLOPT_RETURNTRANSFER,true);
curl_setopt($cSession,CURLOPT_HEADER, false);

// curl_setopt($cSession,CURLOPT_HTTPHEADER, array(
//     "Accept: application/json",
//     "Content-Type: application/json",
//     "Authorization: Bearer $apiKey"
// ));

$results = curl_exec($cSession);
$err = curl_error($cSession);


curl_close($cSession);

$picData = json_decode($results);
echo json_encode($picData->hits[0]);
?>