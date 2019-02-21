class Light {

    constructor(parameters) {

	// parametry konstruktora przekazane podczas
	// tworzenia obiektu klasy Light
	// np scena
        this.color = parameters.color
        this.strongLight = parameters.strong
        this.distance = parameters.distance
        this.range = parameters.range
        this.scattering = parameters.scattering
        this.position = parameters.position
        console.log("rozmiar: "+ Math.round(this.range*22))

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
        this.light = new THREE.SpotLight(this.color, this.strongLight, this.distance, this.range, this.scattering);
        this.light.castShadow = true;  // wyswietla cienie
        
        // dodanie światła do kontenera
        this.light.position.set(this.position.x, this.position.y, this.position.z);
        this.container.add(this.light);

        // var helper = new THREE.CameraHelper( this.light.shadow.camera ); // pokazuje zakres cieni / swiatla
        // this.container.add(helper)

		// nakierowanie na środek sceny

		//utworzenie widzialnego elementu reprezentującego światło
		var geometry = new THREE.SphereGeometry( Math.round(this.range*30), 12, 12 );
        var material = new THREE.MeshBasicMaterial( {
            color: this.color,
		    side: THREE.DoubleSide,
		    wireframe: true,
		    wireframeLinewidth: 2,
		    transparent: true,
            opacity: 0.5,
            depthTest: true,
            depthWrite:true} );
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
        
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

