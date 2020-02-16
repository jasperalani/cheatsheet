<?php

function links()
{
    ?>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/environment-min.js"></script>
    <link rel="stylesheet" href="css/theme.css">
    <?php
}

function getDB()
{
    $data = ['127.0.0.1', 'root', '', 'sg_db', 3307];
    if($_ENV == '000'){
        $data = ['localhost', 'id12522551_sg_db_admin', file_get_contents(getcwd().'/db_pass.txt'), 'id12522551_sg_db', 3306];
    }
    $mysqli = new mysqli($data[0], $data[1], $data[2], $data[3], $data[4]);
    if ($mysqli->connect_errno) {
        echo "Error: Failed to make a MySQL connection, here is why: \n";
        echo $mysqli->connect_error;
        exit;
    }
    return $mysqli;
}