$(document).ready(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth / window.innerHeight,
		0.1,
		10000
	);

	var renderer = new THREE.WebGLRenderer({antialias: false});
	renderer.setClearColor(0x444444);
	renderer.setSize(window.innerWidth, window.innerHeight);


	var axes = new THREE.AxesHelper(1000);
	scene.add(axes);
	$("#root").append(renderer.domElement);

	camera.position.set(70, 70, 140);
	camera.lookAt(scene.position);


	// var material = new THREE.MeshPhongMaterial({ 
	// 	color: 0xff0000,
	// 	specular: 0xffffff,
	// 	shininess: 50,
	// 	side: THREE.DoubleSide,
	// 	map: new THREE.TextureLoader().load("textura.jpg"),
	// 	})

	// var geometry = new THREE.BoxGeometry(30, 30, 30);
	// var cube = new THREE.Mesh(geometry, material);
	// cube.position.set(0,0,0)

	var modelMaterial = new THREE.MeshBasicMaterial(
		{
			map: new THREE.TextureLoader().load("model/mario2.jpg"),
			morphTargets: true // ta własność odpowiada za animację materiału modelu
		});
		var mixer = null
		var meshModel = null
	var loader = new THREE.JSONLoader();
	loader.load('model/mario.js', function (geometry) {
           
		meshModel = new THREE.Mesh(geometry, modelMaterial)
		meshModel.name = "name";
		meshModel.rotation.y = 20; // ustaw obrót modelu
		meshModel.position.y = 30; // ustaw pozycje modelu
		meshModel.scale.set(2,2,2); // ustaw skalę modelu
   
		scene.add(meshModel);
   
		console.log(geometry.animations)
		geometry.animations.forEach(e =>{
			console.log(e)
			$("<div>",{
				id: e.name,
				html: e.name,
			}).click(()=>{
				console.log('macu')
			}).appendTo($("#controls"))
		})

		mixer = new THREE.AnimationMixer(meshModel)
		mixer.clipAction("painc").play()

		

	});



	var plane = new Plane()
	console.log(plane)
	scene.add(plane.getPlane())


	var angle = 0
	var clock = new THREE.Clock();
	function render() {
		var delta = clock.getDelta();
		// console.log(delta)
		if (mixer) mixer.update(delta)

		// cube.rotation.y += 0.01;
		angle+=0.01
		camera.position.x = 350 * (Math.cos(angle))
		camera.position.z = 350 * (Math.sin(angle))
		camera.lookAt(scene.position);

		// cube.rotation.z += 0.01;

		requestAnimationFrame(render);
		console.log("render leci");
		renderer.render(scene, camera); 
	}
	render();
});