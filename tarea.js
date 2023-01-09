//1) Una función recibe como parámetro una cadena de caracteres. 
//Las palabras de esta cadena de caracteres están separadas por puntos y comas. 
//La función debe imprimir cada palabra. Por ejemplo
//"Este;es;un;mensaje". El resultado sería:

//Este

//es 

//un

//mensaje



const separarPalabras = (palabras) => {
    const pa = palabras.split(";");
    pa.forEach(data => console.log(data, "\n"));
  }


separarPalabras("Bienvenidos;a;la;PUCE;sede;Esmeraldas")
console.log("\n")
separarPalabras("Tarea;de;programacion")
console.log("\n")
separarPalabras("Los;delfines;son;mamiferos")
console.log("\n")
separarPalabras("this;is;a;sentence")
console.log("\n")
separarPalabras("La;rana;dardo;dorada;es;el;animal;mas;venenoso;del;mundo")

//const palabras="Bienvenidos;a;la;PUCE;sede;Esmeraldas"
//const pa=palabras.split(";")
//pa.forEach(data=>console.log(data,"\n"))

//2) Diseñe la función que recibe como parámetro un array de enteros. La función debe devolver el array ordenado. (Orden ascendente - consulte el método sort)


const num = [5, 1, 8, 9, 6, 2, 7];

const ordenar = (Numarray) => {
  return Numarray.sort((a, b) => {
    return a - b;
  });
}

console.log(ordenar(num))

//3) Diseñe la función que recibe como parámetro un array de string. 
//La función debe devolver el array ordenado. (Orden ascendente - consulte el método sort)

var array=["Abel","Maria","Jessica","Jose","Devin","Pepe"]
const ordenLetras=(arrayle)=>{
    return arrayle.sort()
}

console.log(ordenLetras(array))


//4) Una cadena de caracteres contienes los nombres de ciudades. 
//Se pide convertir esa cadena en un array, y luego ordenarla en forma descendente.
//Por ejemplo: "Quito-Barcelona-Lima-Guayaquil-Bogotá-Cali-Esmeraldas"
//El resultado sería:
//Quito
//Lima
//Guayaquil
//Esmeraldas
//Cali
//Bogotá
//Barcelona

console.log("\n")

const ciud="Quito-Barcelona-Lima-Guayaquil-Bogotá-Cali-Esmeraldas"
const oredenCiu = (ciudades) => {
    const pa = ciudades.split("-");
    return pa.sort().reverse()
    
  }

 console.log(oredenCiu(ciud))