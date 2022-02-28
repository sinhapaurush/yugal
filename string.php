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

    $site_title = "YUGAL"; 
    //This will be used by Framework and external Library will be able to reach it.
    $noscript_tag = "<div style='position:fixed;width:100vw;height:100vh;background: #fff2f2;overflow:hidden;text-align:center;padding-top: 38vh'>
    <div style='width:50vw;border:2px dotted red;background:#fff;display:inline-block;text-align:center;border-radus:20px;padding:20px'>
    <h2 style='color:red'>JavaScript Error</h2>
    <p>Can't Find JavaScript enabled in your browser, please upgrade your browser or enable JS in settings.
    Click <a href=''>here to reload</a>.
    </p>
    </div>
    </div>";
    /* ACCEPTED VALUES: basic | standard | full */
    // 'standard' BY DEFAULT
    $ckeditor_type = "full";
    
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