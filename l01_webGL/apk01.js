$(document).ready(function(){
	var scene = new THREE.Scene()

	var camera = new THREE.PerspectiveCamera(
		45,    // kąt patrzenia kamery (FOV - field of view)
		4/3,    // proporcje widoku, powinny odpowiadać proporjom naszego ekranu przeglądarki
		0.1,    // minimalna renderowana odległość
		10000    // maxymalna renderowana odległość od kamery 
		);

	var renderer = new THREE.WebGLRenderer()
	renderer.setClearColor(0x000000)
	renderer.setSize(500, 500)

	var axes = new THREE.AxesHelper(1000)
	scene.add(axes)

	$("#root").append(renderer.domElement)

	camera.position.set(100, 100, 100)
	camera.lookAt(scene.position)


	function render() {
		requestAnimationFrame(render);
		console.log("render leci")			
		renderer.render(scene, camera);
	}
	render()
})