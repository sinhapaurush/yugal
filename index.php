<?php
    include('modules/tminc.php');
    meta(
        array(
            "title" => ""
        )
    );
    $body = pre_Root("<span>Loading, Please wait...</span>");
    export_screen($body);
    end_doc(
        array(
            "./pages/index.js"
        )
    );
?>