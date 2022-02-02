<?php

function get_string_between($string, $start, $end)
{
    $string = ' ' . $string;
    $ini = strpos($string, $start);
    if ($ini == 0) return '';
    $ini += strlen($start);
    $len = strpos($string, $end, $ini) - $ini;
    return substr($string, $ini, $len);
}

function getWordId()
{
    $t = file_get_contents('https://www.kurnik.pl/slowoku/');
    $wordid = get_string_between($t, '={"wd":"', '",');

    echo json_encode(['wordid' => $wordid]);
    die;
}

function getWordlist()
{
    echo file_get_contents('https://www.kurnik.pl/slowoku/wl.txt?1');
    die;
}

switch ($_GET['action']) {
    case 'getWordId':
        return getWordId();

    case 'getWordlist':
        return getWordlist();
}
