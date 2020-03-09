<?php

header("Access-Control-Allow-Origin: *");

$post_data = array (
  'list' => 
  array (
    0 => 
    array (
      'id' => 1,
      'species' => 'Gato',
      'iconURL' => 'http://ulisesrg.com/mascotas-assets/cat.png',
      'description' => 'Tiernos e inteligentes',
    ),
    1 => 
    array (
      'id' => 2,
      'species' => 'Perro',
      'iconURL' => 'http://ulisesrg.com/mascotas-assets/dog.png',
      'description' => 'Cariñosos y leales',
    ),
    2 => 
    array (
      'id' => 3,
      'species' => 'Conejo',
      'iconURL' => 'http://ulisesrg.com/mascotas-assets/rabbit.png',
      'description' => 'Callados y traviesos',
    )
  )
);

echo json_encode($post_data);


?>