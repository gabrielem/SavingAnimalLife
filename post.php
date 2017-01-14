<?php

function addLog(){
  $myfile = fopen("logs.txt", "a") or die("Unable to open file!");
  $txt = ""
  .date("Y-m-d")
  ." - "

  ;
  fwrite($myfile, "\n". $txt);
  fclose($myfile);
}
