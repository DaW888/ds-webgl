$(document).ready(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth / window.innerHeight,
		0.1,
		10000
	);

	var renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0x000000);
	renderer.setSize(window.innerWidth, window.innerHeight);

	var axes = new THREE.AxesHelper(1000);
	scene.add(axes);
	$("#root").append(renderer.domElement);

	camera.position.set(170, 140, 400);
	camera.lookAt(scene.position);

	var material = new THREE.MeshBasicMaterial({ 
		side: THREE.DoubleSide, 
		map: new THREE.TextureLoader().load('textura.jpg') ,
		transparent: true, 
		opacity: 0.8,
		})

	var geometry = new THREE.BoxGeometry(50, 50, 50);
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	var angle = 0
	

	function render() {

		angle+=0.1
		camera.position.z = Math.cos(angle)*200
		camera.position.x = Math.sin(angle)*200
		camera.lookAt(scene.position);

		requestAnimationFrame(render);
		console.log("render leci");
		renderer.render(scene, camera); 
	}
	render();
});