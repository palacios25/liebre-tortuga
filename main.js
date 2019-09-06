import Corredor from "./Corredor.js";

let ganador = document.querySelector("#ganador");
let btn = document.querySelector("#btn");
btn.addEventListener("click", lanzar);
let turtle = new Corredor(1);
let hare = new Corredor(2);

function lanzar(){
    ganador.textContent = avanzar();
}

function avanzar(){
    let winT = " El ganador es: Tortuga";
    let winL = " EL ganador es: Liebre";
    let i = 0;

    do{
        turtle.correrT();
        hare.correrL();
        imprimir(i);
        i++;
    }while(turtle.posicion < 0 && hare.posicion < 0);

    if(turtle.posicion >= 90){
        newPosition();
        return winT;
    }else if (hare.posicion >=90) {
        newPosition();
        return winL;
    }
}

function newPosition(){
    turtle.posicion = 0;
    hare.posicion = 0;
}

function imprimir(){

    document.querySelector("#pT").innerHTML = turtle.posicion;
    document.querySelector("#pL").innerHTML = hare.posicion;
}
