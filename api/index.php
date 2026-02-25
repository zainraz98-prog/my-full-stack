<?php
// Handle CORS so your frontend can talk to this API
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$response = [
    "status" => "success",
    "message" => "Hello from PHP on Vercel!",
    "timestamp" => date('Y-m-d H:i:s')
];

echo json_encode($response);
?>