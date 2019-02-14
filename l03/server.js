$(document).ready(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth / window.innerHeight,
		0.1,
		10000
	);

	var renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xffffff);
	renderer.setSize(window.innerWidth, window.innerHeight);

	var axes = new THREE.AxesHelper(1000);
	scene.add(axes);
	$("#root").append(renderer.domElement);

	camera.position.set(70, 70, 140);
	camera.lookAt(scene.position);

	var geometry = new THREE.PlaneGeometry(1000, 1000);
	var material = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide,
		specular: 0xffffff, shininess: 50 /*, map: new THREE.TextureLoader().load('textura.jpg')*/})
	var plane = new THREE.Mesh(geometry, material)
	plane.rotateX(Math.PI/2)
	plane.position.y = -20
	scene.add(plane)


	var material = new THREE.MeshPhongMaterial({ 
		color: 0xff0000,
		specular: 0xffffff,
		shininess: 50,
		side: THREE.DoubleSide,
		map: new THREE.TextureLoader().load("textura.jpg"),
		})
	var materials = []
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/side.png'),
	specular: 0xffffff, shininess: 50 }));
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/side.png'),
	specular: 0xffffff, shininess: 50 }));
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/top.png'),
	specular: 0xffffff, shininess: 50 })); 
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/bottom.png'),
	specular: 0xffffff, shininess: 50 })); 
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/side.png'),
	specular: 0xffffff, shininess: 50 })); 
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks/side.png'),
	specular: 0xffffff, shininess: 50 }));

	var geometry = new THREE.BoxGeometry(30, 30, 30);
	var cube = new THREE.Mesh(geometry, materials);
	scene.add(cube);
	
	// var light = new THREE.SpotLight(0xffff00, 3, 500, 3.14);
	// light.position.set(100, 100, 100);
	// light.lookAt(scene.position);
	// scene.add(light);
 
	var light = new Light(scene)
	console.log(light)
	scene.add(light.getLight())

	
	var angle = 0
	function render() {

		// cube.rotation.y += 0.01;
		angle+=0.01
		camera.position.x = 200 * (Math.cos(angle))
		camera.position.z = 200 * (Math.sin(angle))
		camera.lookAt(scene.position);

		// cube.rotation.z += 0.01;

		requestAnimationFrame(render);
		console.log("render leci");
		renderer.render(scene, camera); 
	}
	render();
});