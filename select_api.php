<?php
include 'config_file.php';
$message ='';

$connection =new mysqli($host_name,$host_user,$host_password,$database_name);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}


$arr = array();

$sql = "SELECT * from product"; 
$result_set = mysqli_query($connection, $sql);
while ($result = mysqli_fetch_array($result_set)) {
    array_push($arr, $result);
}
$responseJson = json_encode(array('results' => $arr));
echo $responseJson;
$connection->close();