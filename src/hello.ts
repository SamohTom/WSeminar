import { isThisTypeNode } from "../node_modules/typescript/lib/typescript"

class Bruch{
    constructor(public n: number,public z: number){}

    show(){
        console.log(this.n + "\n" + this.z)
    }

    multiplizieren(bruch: Bruch){
        this.n = this.n * bruch.n
        this.z = this.z * bruch.z
    }

    add(bruch: Bruch){
        if(this.n != bruch.n){
            this.n *= bruch.n    
            this.z *= bruch.n
            this.z += bruch.z * this.z 
        }else{
            this.n += bruch.n
        }
    }
}