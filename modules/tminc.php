<?php
ini_set("display_errors", "1");
http_response_code(200);
include_once('./string.php');
function import($array){
    foreach ($array as $each_library) {
        if (file_exists('lib/' . $each_library . '/header.php')) {
            include_once('lib/' . $each_library . '/header.php');
        }            
    }
    foreach ($array as $each) {
        if (file_exists("lib/{$each}/index.php")) {
            include_once("lib/{$each}/index.php");
        }
    }
}
function meta($arr)
{
    global $theme_color;
    global $favicon;
    global $common_head_tag;
    global $webapp;
    global $universal_library;
    global $site_title;
    global $noscript_tag;

?><!DOCTYPE html><html lang="en"><head><?php
        foreach ($universal_library as $each_library) {
            if (file_exists('lib/' . $each_library . '/header.php')) {
                include_once('lib/' . $each_library . '/header.php');
            }            
        }
        ?><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><?php
        foreach ($arr as $key => $val) {
            if ($key === "title") {
                echo "<title>" . $val . "</title>";
                echo "<meta name=\"title\" content=\"{$val}\">";
            } elseif ($key === "css") {
                foreach ($val as $ele) {
                    echo "<link rel='stylesheet' type='text/css' href='" . $ele . "'>";
                }
            } elseif ($key === "design") {
                echo "<style>";
                foreach ($val as $name) {
                    include_once("design/" . $name . ".php");
                }
                echo "</style>";
            } elseif ($key === "description") {
                echo "<meta name='description' content='" . $val . "'>";
            } elseif ($key === "keyword") {
                echo "<meta name='keywords' content='" . $val . "'>";
            } elseif ($key === "robots") {
                if ($val == false) {
                    echo "<meta name='robots' content='noindex'>";
                }
            } elseif ($key === "custom") {
                echo $compress_project_header == true ? str_replace("\n", "", str_replace("\t", "", $val)) : $val;
            } elseif ($key === "import") {
                $pages = explode(", ", $val);
                foreach ($pages as $coms) {
                    include_once("comp/" . $coms . ".php");
                }
            }
        }
        ?><meta name="theme-color" content="<?php echo $theme_color; ?>"><?php
                if ($webapp == true) {
                    echo "<link rel='manifest' href='menifest.webmenifest'>";
               }
               ?><?php
        if ($favicon[0] === false) {
            echo '';
        } else {
            if ($favicon[1] === false || !isset($favicon[1]) || $favicon[1] === '') {
            ?>
                <script>
                    var errmsg = 'Error in setting Favicon, see CONSOLE for issue and its fix.\n';
                    alert(errmsg);
                    console.warn(errmsg);
                    console.log('ISSUE FIX HINT: OPEN /default.php and add image type of favicon in 2nd Value (1st INDEX) of array in \'$favicon\' variable in line 3, or change its 1st Value (0th Index) to false to remove custom favicon.')
                </script>
            <?php
            }
            ?><meta name="msapplication-TileImage" content="<?php echo $favicon[0]; ?>"><meta name="msapplication-TileColor" content="<?php echo $favicon[0]; ?>" /><link rel="icon" type="image/<?php echo $favicon[1]; ?>" href="<?php echo $favicon[0]; ?>"><link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo $favicon[0]; ?>"><link rel="apple-touch-icon-precomposed" sizes="114x114" href="i<?php echo $favicon[0]; ?>"><link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo $favicon[0]; ?>"><link rel="apple-touch-icon-precomposed" href="<?php echo $favicon[0]; ?>"><?php
                                                                                                                        }
                echo $common_head_tag; 
                if ($key === "library") {
                    foreach ($val as $each) {
                        if (file_exists('lib/' . $each . '/header.php')) {
                            include_once('lib/' . $each . '/header.php');
                        }
                    }
                }
                ?><!-- ADD ANY YOUR CUSTOM <HEAD> CODE ABOVE, DON'T ADD ANY CUSTOM HEAD CODE BELOW.  --><!-- DO NOT DELETE THIS COMMENT! THIS COMMENT IS VERY IMPORTANT FOR YUGAL TO WORK! --></head><body><noscript><?php 
                echo str_replace("\n", "", $noscript_tag);
                ?></noscript><?php
    if ($key === "library") {
        foreach ($val as $each) {
            if (file_exists("lib/{$each}/index.php")) {
                include_once("lib/{$each}/index.php");
            }
        }
    }
    foreach ($universal_library as $each_library) {
        if (file_exists('lib/' . $each_library . '/index.php')) {
            include_once('lib/' . $each_library . '/index.php');
        }
    }
}
function export_screen($screen){
    echo $screen;
}
function end_doc($arr){
    foreach ($arr as $each){
        echo "<script src='".$each."'></script>";
    }
    echo "</body></html>";
}
function close(){
    echo "</body></html>";
}
?>
