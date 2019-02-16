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

	camera.position.set(120, 200, 760);
	camera.lookAt(scene.position);


	var materials = []
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/side.png') }));
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/side.png') }));
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/top.png') })); 
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/bottom.png') })); 
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/side.png') })); 
	materials.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/side.png') })); 

	var geometry = new THREE.BoxGeometry(50, 50, 50);
	// var cube = new THREE.Mesh(geometry, materials);
	// scene.add(cube);

	var tabPos = [
		{x: 0, y: 0, z: 0},
		{x: 50, y: 0, z: 0},
		{x: 100, y: 0, z: 0},
		{x: 150, y: 0, z: 0},
		{x: 200, y: 0, z: 0},
		{x: 50, y: 50, z: 0},
		{x: 100, y: 50, z: 0},
		{x: 150, y: 50, z: 0},
		{x: 50, y: 100, z: 0}
	]

	tabPos.forEach(({x, y, z}) =>{
		var cube = new THREE.Mesh(geometry, materials);
		cube.position.set(x,y,z);
		scene.add(cube);
	})

	
	var raycaster = new THREE.Raycaster();
	var mouseVector = new THREE.Vector2();

	var current = null;
	$(document).mousedown(event => {
		mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
		mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
		raycaster.setFromCamera(mouseVector, camera);
		var intersects = raycaster.intersectObjects(scene.children);
		if(intersects.length > 0){
			current = intersects[0].object;
		}

	})
	var angle = 0.2
	$(document).keydown( event =>{
		var keyCode = event.which;
		console.log(keyCode);

		switch(keyCode){
			case 87:
				console.log("W");
				current.position.z -= 50
				break;
			case 65:
				console.log("A");
				current.position.x -= 50
				break;
			case 83:
				console.log('S');
				current.position.z += 50
				break;
			case 68:
				console.log('d');
				current.position.x += 50
				break;
			case 81:
				current.position.y -= 50
				break;
			case 69:
				current.position.y += 50
				break;


			case 38:
				console.log("up");
				camera.position.y += 20
				break;
			case 37:
				console.log("left");
				angle += 0.05
				break;
				case 40:
				console.log('down');
				camera.position.y -=20
				break;
				case 39:
				console.log('right');
				angle -= 0.05
				break;
		}

	})
	

	function render() {
		camera.position.z = Math.cos(angle)*700
		camera.position.x = Math.sin(angle)*700
		camera.lookAt(scene.position);


		requestAnimationFrame(render);
		console.log("render leci");
		renderer.render(scene, camera); 
	}
	render();
});