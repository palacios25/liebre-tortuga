export default class Corredor{
    constructor(numCorredor){
        this._numCorredor = numCorredor;
        this.posicion = 0;
    }
    correr(){
        return Math.floor(Math.random()*100)+1;
    }

    correrT(){
       let cara =  Math.floor(Math.random() * (6 )) + 1;
       if (cara === 2 || cara === 4 || cara === 6) {
           this.posicion += 3;
       } else if (cara === 1 || cara === 3) {
           this.posicion += 1; 
       } else {
           this.posicion -= 1;
       }
       return this.posicion;
    }

    correrL(){
      let cara = Math.floor(Math.random() * (6)) + 1;
      if (cara === 1) {
          this.posicion += 0;
      } else if (cara === 2) {
          this.posicion += 9;
      } else if (cara === 3) {
          this.posicion -= 12;
      } else if (cara === 4 || cara === 6) {
          this.posicion += 1;
      } else {
          this.posicion -2;
      }
      return this.posicion;
    }
}
//Cambiarlo a tener herencia 

class Liebre extends Corredor{
    constructor(numCorredor){
        super(numCorredor);
    }
    correr(){
        let av = super.correr();
        if (av ){
            this.posicion += 3; 
        }
    }
}


//Crear la clase que me permita controlar un elvador al construir debo decir
//de cuantos pisos es y su capacidad. Puedo mover el elevador entre esos
//pisos y saber el estado de la puerta.
//Saber si esta abierta o cerrada la puerta (Estado de la puerta).