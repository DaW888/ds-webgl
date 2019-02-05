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

	var axes = new THREE.AxesHelper(1000)
	scene.add(axes)

	$("#root").append(renderer.domElement)

	camera.position.set(100, 100, 100)
	camera.lookAt(scene.position)


	var material = new THREE.MeshNormalMaterial({
		color: 0x8888ff,
		side: THREE.DoubleSide,
		wireframe: false,
		transparent: true,
		opacity: 0.5
	})

	var geometry = new THREE.BoxGeometry(30, 30, 30)
	var cube = new THREE.Mesh(geometry, material)
	scene.add(cube)

	var start = false
	$("#startCw9, #stopCw9").on('click', function(){
		console.log($("#selectCw9").val())
		console.log($(this).val())
		if($(this).val() == "start") start = true
		if($(this).val() == "stop") start = false
		
		// cube.position.set($('#rangeXcw8').val(), $('#rangeYcw8').val(), $('#rangeZcw8').val())
	})

	function render() {
		if(start){
			console.log($("#selectCw9").val())
			if($("#selectCw9").val() == "x")
				cube.position.x += 0.1
			if($("#selectCw9").val() == "y")
				cube.position.y += 0.1
			if($("#selectCw9").val() == "z")
				cube.position.z += 0.1
			if($("#selectCw9").val() == "-x")
				cube.position.x -= 0.1
			if($("#selectCw9").val() == "-y")
				cube.position.y -= 0.1
			if($("#selectCw9").val() == "-z")
				cube.position.z -= 0.1
		} 
			
		requestAnimationFrame(render);
		console.log("render leci")			
		renderer.render(scene, camera);
	}
	render()
})