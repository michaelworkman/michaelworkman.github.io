<?php

// Connect to the database
$db = new PDO('mysql:host=localhost;dbname=activity_tracker', 'root', '');

// Get the activity from the form
$activity = $_POST['activity'];

// Insert the activity into the database
$query = 'INSERT INTO activities (activity) VALUES (?)';
$statement = $db->prepare($query);
$statement->execute(array($activity));

// Redirect the user to the activity tracker page
header('Location: activity_tracker.php');

?>