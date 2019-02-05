$(document).ready(function(){
	var scene = new THREE.Scene()

	var camera = new THREE.PerspectiveCamera(
		45,    
		window.innerWidth/window.innerHeight,
		0.1,   
		10000  
		);

	var renderer = new THREE.WebGLRenderer()
	renderer.setClearColor(0x000000)
	renderer.setSize(window.innerWidth, window.innerHeight)

	// var axes = new THREE.AxesHelper(1000)
	// scene.add(axes)

	$("#root").append(renderer.domElement)

	camera.position.set(0, 0,200)
	// camera.position.set(100, 100, 100)
	camera.lookAt(scene.position)

	var material = new THREE.MeshNormalMaterial({
		color: 0xffff00,
		side: THREE.DoubleSide,
		wireframe: true,
		wireframeLinewidth: 20,
		transparent: true,
		opacity: 0.5
	})

	$("#szescian").on('click', function(){
		var geometry = new THREE.BoxGeometry(70, 70, 70)
		var cube = new THREE.Mesh(geometry, material)
		scene.add(cube)
	})
	
	$("#sfera").on('click', function(){
		var geometry = new THREE.SphereGeometry( 35, 32, 32 );
		var sfera = new THREE.Mesh(geometry, material)
		scene.add(sfera)
	})

	$("#walec").on('click', function(){
		var geometry = new THREE.CylinderGeometry( 35, 35, 70, 32 );
		var walec = new THREE.Mesh(geometry, material)
		scene.add(walec)
	})

	$("#stozek").on('click', function(){
		var geometry = new THREE.ConeGeometry( 35, 70, 10 )
		var cone = new THREE.Mesh(geometry, material)
		scene.add(cone)
	})


	function render() {
		requestAnimationFrame(render);
		console.log("render leci")			
		renderer.render(scene, camera);
	}
	render()
})