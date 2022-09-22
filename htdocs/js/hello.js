class Bruch {
    constructor(n, z) {
        this.n = n;
        this.z = z;
    }
    show() {
        console.log(this.n + "\n" + this.z);
    }
    multiplizieren(bruch) {
        this.n = this.n * bruch.n;
        this.z = this.z * bruch.z;
    }
    add(bruch) {
        if (this.n != bruch.n) {
            this.n *= bruch.n;
            this.z *= bruch.n;
            this.z += bruch.z * this.z;
        }
        else {
            this.n += bruch.n;
        }
    }
}
export {};
//# sourceMappingURL=hello.js.map