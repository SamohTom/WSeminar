import { isThisTypeNode } from "../node_modules/typescript/lib/typescript"

class Bruch{
    constructor(public z: number, public n: number){}

    show(){
        console.log(this.z + "\n" + this.n)
        console.log("-----------")
    }

    multiplizieren(bruch: Bruch){
        this.n = this.n * bruch.n
        this.z = this.z * bruch.z
    }

    add(bruch: Bruch){
        if(this.n != bruch.n){
            let bz = bruch.z * this.n
            this.n *= bruch.n    
            this.z *= bruch.n
            
            this.z += bz
        }else{
            this.z += bruch.z
        }
    }
}

let b1 = new Bruch(1, 2)
let b2 = new Bruch(1, 3)
b1.show()
b2.show()

b1.multiplizieren(b2)
b1.show()
