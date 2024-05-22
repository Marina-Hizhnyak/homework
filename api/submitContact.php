<?php
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

 $data = json_decode(file_get_contents('php://input'), true);


$erreurs = [];
$erreurs = valideEstVide("name", $data, $erreurs);
$erreurs = valideTaille("name", $data, $erreurs, 100);

$erreurs = valideEstVide("email", $data, $erreurs);
$erreurs = valideTaille("email", $data, $erreurs, 100);
$erreurs = valideEmail("email", $data, $erreurs);

$erreurs = valideEstVide("message", $data, $erreurs);
$erreurs = valideTaille("email", $data, $erreurs, 200);

if (count($erreurs)>0) {
  http_response_code(422);
  echo json_encode($erreurs);
} else {
  $contacts = json_decode(file_get_contents('../storage/contacts.json'), true);
  $contacts[] = $data;
  file_put_contents('../storage/contacts.json', json_encode($contacts));
  echo json_encode(['success' => true]);
}

function valideEstVide(string $nomChamps, array $data, $erreurs):array {
if (!isset($data[$nomChamps]) || strlen(trim($data[$nomChamps]))<=0) {
  $erreurs[$nomChamps]= "Le champs $nomChamps est obligatoire";
}
return $erreurs;
};

function valideTaille(string $nomChamps, array $data, $erreurs, $max):array {
if (strlen(trim($data[$nomChamps]))>$max) {
  $erreurs[$nomChamps]= "Le champs $nomChamps est trop grand";
}
return $erreurs;
};

function valideEmail(string $nomChamps, array $data, $erreurs):array {
if (!(filter_var($data[$nomChamps], FILTER_VALIDATE_EMAIL))) {
  $erreurs[$nomChamps]= "Le champs $nomChamps n'est pas valide";
}
return $erreurs;

};
