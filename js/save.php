<?PHP

$data = json_decode(file_get_contents("php://input"),true) ;
$out = json_encode($data['data']) ;
file_put_contents('riki.json',$out) ;
echo "file $filename salvato correttamente." ;

?>