array_push($productsArray, $products);

$products["product"] = "Plastic Flying Disc";
$products["price"] = "15";
$products["quantity"] = "4";

array_push($productsArray, $products);

$products["product"] = "Beach Umbrella";
$products["price"] = "75";
$products["quantity"] = "1";

array_push($productsArray, $products);
echo json_encode($productsArray[rand(0, 4)]);

?>