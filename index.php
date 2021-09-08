<?php
include('modules/tminc.php');
meta(
    array(
        "title" => "TMINC Yugal",
        "library" => array(
            "tml"
        ),
        "css"=>array(
            "./design/nav.css"
        ),
        "design"=>array(
            "def"
        )
    )
);
$body = root();
export_screen($body);
end_doc(
    array(
        "./pages/nav.js",
        "./pages/index.js"
    )
);
?>