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

	var geometry = new THREE.BoxGeometry(20, 20, 20)
	var material = new THREE.MeshNormalMaterial({
		color: 0x8888ff,
		side: THREE.DoubleSide,
		wireframe: false,
		transparent: true,
		opacity: 0.5,
	})
	
	for(let i = 1; i<=5; i++){
		for(let j = 1; j<=5; j++){
			var cube = new THREE.Mesh(geometry, material)
			cube.position.set(21*j - 21*5/2,0,21*i - 21*5/2)
			scene.add(cube)
		}
	}

	function render() {
		requestAnimationFrame(render);
		console.log("render leci")			
		renderer.render(scene, camera);
	}
	render()
})