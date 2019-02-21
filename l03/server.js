$(document).ready(function(){
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth / window.innerHeight,
		0.1,
		10000
	);

	var renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setClearColor(0x000032);
	renderer.setSize(window.innerWidth, window.innerHeight);

	renderer.shadowMap.enabled = true
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	// var axes = new THREE.AxesHelper(1000);
	// scene.add(axes);
	$("#root").append(renderer.domElement);

	camera.position.set(70, 70, 140);
	camera.lookAt(scene.position);

	var geometry = new THREE.PlaneGeometry(1000, 1000);
	var material = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide,
		specular: 0xffffff, shininess: 50 /*, map: new THREE.TextureLoader().load('textura.jpg')*/})
	var plane = new THREE.Mesh(geometry, material)
	plane.rotateX(Math.PI/2)
	plane.position.y = -25
	plane.receiveShadow = true;
	scene.add(plane)


	var material = new THREE.MeshPhongMaterial({ 
		color: 0xff0000,
		specular: 0xffffff,
		shininess: 50,
		side: THREE.DoubleSide,
		map: new THREE.TextureLoader().load("textura.jpg"),
		})
	var materials = []
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/side.png'),
	specular: 0xffffff, shininess: 10 }));
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/side.png'),
	specular: 0xffffff, shininess: 10 }));
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/top.png'),
	specular: 0xffffff, shininess: 10 })); 
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/bottom.png'),
	specular: 0xffffff, shininess: 10 })); 
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/side.png'),
	specular: 0xffffff, shininess: 10 })); 
	materials.push(new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: new THREE.TextureLoader().load('blocks2/side.png'),
	specular: 0xffffff, shininess: 10 }));

	var geometry = new THREE.BoxGeometry(30, 30, 30);
	var cube = new THREE.Mesh(geometry, materials);
	cube.position.set(0,0,0)

	cube.geometry.computeVertexNormals(true);
	cube.castShadow = true;
	scene.add(cube);

	var geometry = new THREE.BoxGeometry(30, 30, 30);
	var cube = new THREE.Mesh(geometry, materials);
	cube.position.set(50,10,100)

	cube.geometry.computeVertexNormals(true);
	cube.castShadow = true;
	scene.add(cube);

	var geometry = new THREE.BoxGeometry(30, 30, 30);
	var cube = new THREE.Mesh(geometry, materials);
	cube.position.set(50,20,-100)

	cube.geometry.computeVertexNormals(true);
	cube.castShadow = true;
	scene.add(cube);


	
	// var light = new THREE.SpotLight(0xffff00, 3, 500, 3.14);
	// light.position.set(100, 100, 100);
	// light.lookAt(scene.position);
	// scene.add(light);

	// var light = new Light({
	// 	color: 0xffaa00,
	// 	strong: 1,
	// 	distance: 500,
	// 	range: Math.PI/8,
	// 	scattering: 0.2,
	// 	position: {x: 10, y: 10, z: 200}
	// })
	// console.log(light)
	// scene.add(light.getLight())
	// light.container.children[0].color = {r: 1, g: 1, b: 10}
	// var light = new Light({
	// 	color: 0xffff00,
	// 	strong: 1,
	// 	distance: 500,
	// 	range: Math.PI/8,
	// 	scattering: 0.2,
	// 	position: {x: -200, y: 10, z: -100}
	// })
	// console.log(light)
	// scene.add(light.getLight())
	var l=0
	$("#add").click( function(){
	l ++
		var light = new Light({
			color: 0xffffff,
			strong: 1,
			distance: 500,
			range: Math.PI/8,
			scattering: 0.2,
			position: {x: 0, y: 80, z: 0}
		})
		console.log(light)
		scene.add(light.getLight())

		color = {r: 1, g: 1, b: 1}
		var box = $("<div>").addClass("oneControl")
		$("<div>").css("background-color", "#ff0000").click(()=>{
			color = {r: 1, g: 0, b: 0}
			light.container.children[0].color = color
			light.container.children[1].material.color = color
		}).appendTo(box)
		$("<div>").css("background-color", "#00ff00").click(()=>{
			color = {r: 0, g: 1, b: 0}
			light.container.children[0].color = color
			light.container.children[1].material.color = color
		}).appendTo(box)
		$("<div>").css("background-color", "#0000ff").click(()=>{
			color = {r: 0, g: 0, b: 1}
			light.container.children[0].color = color
			light.container.children[1].material.color = color
		}).appendTo(box)
		$("<div>").css("background-color", "#ffff00").click(()=>{
			color = {r: 1, g: 1, b: 0}
			light.container.children[0].color = color
			light.container.children[1].material.color = color
		}).appendTo(box)
		$("<div>").css("background-color", "#ff00ff").click(()=>{
			color = {r: 1, g: 0, b: 1}
			light.container.children[0].color = color
			light.container.children[1].material.color = color
		}).appendTo(box)
		$("<div>").css("background-color", "#00ffff").click(()=>{
			color = {r: 0, g: 1, b: 1}
			light.container.children[0].color = color
			light.container.children[1].material.color = color
		}).appendTo(box)
		$("<div>").css("background-color", "#ffffff").click(()=>{
			color = {r: 1, g: 1, b: 1}
			light.container.children[0].color = color
			light.container.children[1].material.color = color
		}).appendTo(box)

		$("<input>",{ id: "posX"+l,type: "range", name: "x", min: -300, max: 500, class: "PosX", value: 0}).css("width", "30%").appendTo(box)
		$("<input>",{ id: "posY"+l,type: "range", name: "y", min: 0,    max: 500, class: "PosY", value: 80 }).css("width", "30%").appendTo(box)
		$("<input>",{ id: "posZ"+l,type: "range", name: "z", min: -300, max: 500, class: "PosZ", value: 0 }).css("width", "30%").appendTo(box)
		$("<input>",{ id: "angle"+l,type: "range", name: "angle", min: 0, step: 0.05, max: Math.PI, value: 0.3, class: "angle" }).appendTo(box)
		$("<input>",{ id: "dinstance"+l,type: "range", name: "distance", value: 700, min: 1, max: 2000, class: "distance" }).appendTo(box)
		$("<input>",{ id: "strong"+l,type: "range", name: "strong", min: 0, max: 10, step: 0.1, value: 1, class: "strong" }).appendTo(box)
		$("<input>",{ id: "scattering"+l,type: "range", name: "scattering", min: 0, max: 1, step: 0.05, value: 0.2, class: "scattering" }).appendTo(box)
		box.appendTo("#controls")


		$("#posX"+l).on("input", function () {
			light.container.children[0].position.x = $(this).val()
			light.container.children[1].position.x = $(this).val()
		})
		$("#posY"+l).on("input", function () {
			light.container.children[0].position.y = $(this).val()
			light.container.children[1].position.y = $(this).val()
		})
		$("#posZ"+l).on("input", function () {
			light.container.children[0].position.z = $(this).val()
			light.container.children[1].position.z = $(this).val()
		})
		$("#angle"+l).on("input", function () {
			light.container.children[0].angle = $(this).val()
			light.container.children[1].scale.x = $(this).val()*2
			light.container.children[1].scale.y = $(this).val()*2
			light.container.children[1].scale.z = $(this).val()*2
		})
		$("#dinstance"+l).on("input", function () {
			light.container.children[0].distance = $(this).val()
		})

		$("#strong"+l).on("input", function () {
			light.container.children[0].decay = $(this).val()
		})
		$("#scattering"+l).on("input", function () {
			light.container.children[0].penumbra = $(this).val()
		})
		
	})


	
	var angle = 0
	function render() {

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