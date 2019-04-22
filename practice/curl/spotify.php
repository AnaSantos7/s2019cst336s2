<?php
//step1
$cSession = curl_init();

//step2
curl_setopt($cSession,CURLOPT_URL,"https://api.spotify.com/v1/browse/featured-playlists");
curl_setopt($cSession,CURLOPT_RETURNTRANSFER,true);
curl_setopt($cSession,CURLOPT_HEADER, false);

curl_setopt($cSession, CURLOPT_HTTPHEADER, array(
    "Accept: application/json",
    "Content-Type: application/json",
    "Authorization: Bearer $apiKey"
));

//step3
$results = curl_exec($cSession);
$err = curl_error($cSession);

//step4
curl_close($cSession);

//step5
echo $results;

?>
//step3
$results = curl_exec($cSession);
$err = curl_error($cSession);

//step4
curl_close($cSession);

//step5
echo $results;

?>