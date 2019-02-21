class Plane {
    constructor() {
        // parametry konstruktora przekazane podczas
        // tworzenia obiektu klasy Light
        // np scena
        // this.color = parameters.color
        // this.strongLight = parameters.strong
        // this.distance = parameters.distance
        // this.range = parameters.range
        // this.scattering = parameters.scattering
        // this.position = parameters.position
        // console.log("rozmiar: "+ Math.round(this.range*22))

        this.container = new THREE.Object3D();

        this.init();
    }

    init() {
        var geometry = new THREE.PlaneGeometry(2000, 2000,10, 10);
        var material = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
            wireframe: true,
            color: 0xffffff
        });
        this.plane = new THREE.Mesh(geometry, material);
        this.plane.rotateX(Math.PI / 2);
        this.plane.position.y = -25;
        this.plane.receiveShadow = true;
        this.container.add(this.plane);
    }

    // funkcja zwracająca obiekt kontenera
    // czyli nasze światło wraz z bryłą

    getPlane() {
        return this.container;
    }

}
