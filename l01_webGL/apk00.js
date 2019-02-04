$(document).ready(function(){
	var scene = new THREE.Scene()
	var camera = new THREE.PerspectiveCamera(
		45,    // kąt patrzenia kamery (FOV - field of view)
		4/3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
		0.1,    // minimalna renderowana odległość
		10000    // maxymalna renderowana odległość od kamery 
		);
	var renderer = new THREE.WebGLRenderer()
	renderer.setClearColor(0x0000ff)
	renderer.setSize(500, 500)
	$("#root").append(renderer.domElement)

	camera.position.x = 200
	camera.position.y = 200
	camera.position.z = 200 // lub camera.position.set(100,100,100)

	camera.lookAt(scene.position)

	function render() {


		//w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)
		//np zmieniająca się wartość rotacji obiektu
	
		//mesh.rotation.y += 0.01;
	
		//wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny
	
		requestAnimationFrame(render);
	
		// potwierdzenie w konsoli, że render się wykonuje
	
		console.log("render leci")
		
		//ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą
			
		renderer.render(scene, camera);
	}
	render()
})