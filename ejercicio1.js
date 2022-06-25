const FRASE = prompt("Ingrese una cadena de caracteres:");
const OPCIONES = {
    "1" : FRASE.slice(0, 2),
    "2" : FRASE.slice(0, 3),
    "3" : FRASE.slice(FRASE.length - 2, FRASE.length),
    "4" : FRASE.split("").pop(),
}
const DEFAULT = "Opción invalida";

alert(OPCIONES[prompt("Ingrese una opción:\n1. Mostrar sus dos primeras letras.\n2. Mostrar sus tres primeras letras.\n3. Mostrar sus dos últimas letras.\n4. Mostrar su última letra.")] || DEFAULT);