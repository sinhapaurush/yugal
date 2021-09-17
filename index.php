<?php
include('modules/tminc.php');
meta(
    array(
        "title" => "",
        "design"=>array(
            "def"
        )
    )
);
$body = "
    <yugal-root>
        <span>Loading, Please wait...</span>
    </yugal-root>
";
export_screen($body);
end_doc(
    array(
        "./pages/index.js"
    )
);
?>
