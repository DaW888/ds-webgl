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

	camera.position.set(100, 100, 100);
	camera.lookAt(scene.position);

	var material = new THREE.MeshBasicMaterial({ 
		side: THREE.DoubleSide, 
		map: new THREE.TextureLoader().load('textura.jpg') ,
		transparent: true, 
		opacity: 0.8,
		})

	var geometry = new THREE.BoxGeometry(70, 70, 70);
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	function render() {
		cube.rotation.y += 0.01;
		requestAnimationFrame(render);
		console.log("render leci");
		renderer.render(scene, camera); 
	}
	render();
});