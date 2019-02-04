$(document).ready(function(){
	var scene = new THREE.Scene()

	var camera = new THREE.PerspectiveCamera(
		45,    
		4/3,
		0.1,   
		10000  
		);

	var renderer = new THREE.WebGLRenderer()
	renderer.setClearColor(0x000000)
	renderer.setSize(500, 500)

	var axes = new THREE.AxesHelper(1000)
	scene.add(axes)

	$("#root").append(renderer.domElement)

	camera.position.set(100, 100, 100)
	camera.lookAt(scene.position)

	var geometry = new THREE.BoxGeometry(100, 100, 100)
	var material = new THREE.MeshNormalMaterial({
		color: 0x8888ff,
		side: THREE.DoubleSide,
		wireframe: false,
		transparent: true,
		opacity: 0.5,
	})
	var cube = new THREE.Mesh(geometry, material)
	scene.add(cube)

	function render() {
		cube.rotation.y += 0.01
		requestAnimationFrame(render);
		console.log("render leci")			
		renderer.render(scene, camera);
	}
	render()
})