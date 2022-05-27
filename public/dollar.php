<?php 
    $xml = simplexml_load_file("https://cbr.ru/scripts/XML_daily.asp?date_req=". $_GET['d']);

    foreach ($xml as $Valute) {
        if ($Valute->NumCode == "840") {
            echo $Valute->Value;
        };
    }