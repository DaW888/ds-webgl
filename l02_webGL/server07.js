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

	var geometry = new THREE.BoxGeometry(60, 60, 60);
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	var angle = 0
	
	var raycaster = new THREE.Raycaster();
	var mouseVector = new THREE.Vector2();

	$(document).mousedown(function(event){
		mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
		mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
		raycaster.setFromCamera(mouseVector, camera);
		var intersects = raycaster.intersectObjects(scene.children);
		if(intersects.length > 0){
			console.log(intersects[0].object);
		}

	})
	

	function render() {

		requestAnimationFrame(render);
		console.log("render leci");
		renderer.render(scene, camera); 
	}
	render();
});