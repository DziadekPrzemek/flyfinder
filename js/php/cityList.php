<?php

$response = file_get_contents('http://apigateway.ryanair.com/pub/v1/core/3/airports?apikey=mBZ3XsuiZc6cuqT0cu8xPJt50wZcqxRG');
 $data = json_decode($response, true);

for($n=0; $n<1000; $n++){
	if (!empty($data[$n])){
echo $data[$n]['name'] . "<br />\n";
}

}
?>