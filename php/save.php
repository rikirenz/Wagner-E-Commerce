<?PHP

$data = json_decode(file_get_contents("php://input"),true) ;
$out = json_encode($data['data']) ;
file_put_contents('db.json',$out) ;
echo "file  salvato correttamente." ;	

?>
