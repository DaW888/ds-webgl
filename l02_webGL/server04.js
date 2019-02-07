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
	var materials = []
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/textura.jpg') }));
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/textura2.jpg') }));
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/textura3.jpg') })); 
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/textura4.jpg') })); 
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/textura.jpg') })); 
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/textura2.jpg') })); 

	var geometry = new THREE.BoxGeometry(70, 70, 70);
	var cube = new THREE.Mesh(geometry, materials);
	scene.add(cube);
	

	function render() {

		cube.rotation.y += 0.01;
		cube.rotation.z += 0.01;

		requestAnimationFrame(render);
		console.log("render leci");
		renderer.render(scene, camera); 
	}
	render();
});