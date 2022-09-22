class Bruch {
    constructor(z, n) {
        this.z = z;
        this.n = n;
    }
    show() {
        console.log(this.z + "\n" + this.n);
        console.log("-----------");
    }
    multiplizieren(bruch) {
        this.n = this.n * bruch.n;
        this.z = this.z * bruch.z;
    }
    add(bruch) {
        if (this.n != bruch.n) {
            let bz = bruch.z * this.n;
            this.n *= bruch.n;
            this.z *= bruch.n;
            this.z += bz;
        }
        else {
            this.z += bruch.z;
        }
    }
}
let b1 = new Bruch(1, 2);
let b2 = new Bruch(1, 3);
b1.show();
b2.show();
b1.add(b2);
b1.show();
//# sourceMappingURL=hello.js.map