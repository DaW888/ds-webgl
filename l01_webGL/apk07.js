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

	var geometry = new THREE.OctahedronGeometry(25)
	var material = new THREE.MeshNormalMaterial({
		color: 0x8888ff,
		side: THREE.DoubleSide,
		wireframe: false,
		transparent: true,
		opacity: 0.5,
	})
	var octahedron = new THREE.Mesh(geometry, material)
	scene.add(octahedron)

	$('#btnCw7').click(()=>{
		camera.position.set(Math.floor(Math.random()*500)+1, 
		Math.floor(Math.random()*500)+1, Math.floor(Math.random()*500)+1)
		camera.lookAt(scene.position)
	})


	function render() {
		octahedron.rotation.y += 0.01
		requestAnimationFrame(render);
		console.log("render leci")			
		renderer.render(scene, camera);
	}
	render()
})