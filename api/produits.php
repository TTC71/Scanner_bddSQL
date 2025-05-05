<?php
header('Content-Type: application/json');

$host = '192.168.1.16';
$db = 'mon_app_github';
$user = 'pvesaphong';
$pass = 'TON_MOT_DE_PASSE';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;port=3307;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    $stmt = $pdo->query("SELECT * FROM produits");
    $data = $stmt->fetchAll();
    echo json_encode($data);
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
