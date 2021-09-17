<?php
    $theme_color = '#FFFFFF'; 
    $favicon = array(false, false); 
    /*
        ENTER PATH OF YOUR FAVICON OR UPLOAD FAVICON IN ROOT FOLDER WITH NAME 'favicon.ico' 
        or NO FAVICON WILL BE SET,
        eg: $favicon = array("assets/favicon.png", "png");
    */

    $common_head_tag = ''; //ADD A COMMON HTML <HEAD> TAG HERE FOR ALL PAGES!
    // THIS FESTURE IS GIVEN TO ADD ANY ANALYTIC CODE OR EXTERNAL LINK, CSS ETC.

    $text_accent_heading = "#000000";
    $text_accent_cont = "#000000";

    $universal_library = array(); 
    //All univarsal library should be in Array


    $site_title = "YUGAL SITE TITLE"; 
    //This will be used by Framework and external Library will be able to reach it.
    $yugal_noscript = "<div>
        <h1>JAVASCRIPT ERROR</h1>
        <p>Oops! Can't find JavaScript enabled in your browser, this site uses Javascript, please upgrade browser or enable Javascript.</p>
    </div>
    <style>
        noscript div{
            width: 100vw;
    height: 100vh;
    background: #f6e4e4;
    color: red;
    font-weight: bold;
    position: fixed;
    text-align:center;
    padding-top: 20px
        }
    </style>
    ";
    
    $webapp = false; //ENTER true if you are building webapp, else false. If you are not building webapp then you can delete 'menifest.webmenifest' file from dir.
    //TRUE IF YOU WANT TO USE SPA FEATURE IN IT.

    //MYSQL / MARIADB DETAIL FOR EACH PAGE
    //OPTIONAL, IGNORE, EDIT,DELETE DO WHATEVER YOU WANT.
    $server = ''; 
    $user = ''; 
    $pass = ''; 
    $db = ''; 
    //END OF MYSQL / MARIA DB CREDENTIALS, NOW YOU CAN USE THESE VARIABLE FOR DB CONNECTIONS AND USAGE.
?>
