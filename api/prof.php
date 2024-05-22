<?php

header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

echo file_get_contents('../storage/professeurs.json');

// $utilisateurs = json_decode($utilisateurs);
// // var_dump($posts);

// foreach ($utilisateurs as $utilisateur){
//     if ($utilisateur->id == $id) {
//         echo json_encode($post);
//         die();
//     }