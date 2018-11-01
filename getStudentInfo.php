<?php

$catalog = json_decode($_POST["catalog"]);
$number= $_POST["number"];

$table = "<table>";
$table .= "<tr class='header'><td colspan=2 text-align='center'><center><b>Student Detailed Information</b></center> </td></tr>";
foreach ($catalog as $student)
  if($student->number== $number){
    $table .= "<tr><td>Number: </td><td>".$student->number."</td></tr>";
    $table .= "<tr><td>Name Surname: </td><td>".$student->namesurname."</td></tr>";
    $table .= "<tr><td>Department: </td><td>".$student->department."</td></tr>";
    $table .= "<tr><td>Class: </td><td>".$student->studentclass."</td></tr>";
  }
$table .= "</table>";

echo $table;

?>
