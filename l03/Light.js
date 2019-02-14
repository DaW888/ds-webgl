import { Geometry } from "./three";

class Light {

    constructor(camera, scene) {

	// parametry konstruktora przekazane podczas
	// tworzenia obiektu klasy Light
	// np scena

        this.scene = scene
        this.camera = camera

	//dodatkowe zmienne tworzone w konstruktorze
	//widoczne w dalszych funkcjach
	//...

        //kontener na inne obiekty 3D
        this.container = new THREE.Object3D();

        //wywołanie funkcji init()
        this.init()
    }

    init() {

        // utworzenie i spozycjonowanie światła
        this.light = new THREE.SpotLight(0xffaa00, 1.5, 500, Math.PI / 8);
        this.light.position.set(0, 0, 0);

	// dodanie światła do kontenera
        this.container.add(this.light);

		// nakierowanie na środek sceny
		this.light.position.set(100, 100, 100);

		//utworzenie widzialnego elementu reprezentującego światło
		var geometry = new THREE.SphereGeometry( 5, 32, 32 );
		var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        this.mesh = new THREE.Mesh(geometry, material)
		scene.add(this.mesh);

        // dodanie do kontenera
        this.container.add(this.mesh);
    }


    // funkcja zwracająca obiekt kontenera
    // czyli nasze światło wraz z bryłą

    getLight() {
        return this.container;
    }

    // inne funkcje, np zmiana koloru bryły, zmiana koloru światła

    changeColor (color) {
        console.log("zmiana koloru na " + color)
    }   

}

