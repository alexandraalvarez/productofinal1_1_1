//pido una frase al usuario
 do {
 	var string = prompt("Ingrese una frase");
 } while (string.length === 0); //validando prompt no vacío, problemas con números, solucionar

//declara función cipher
var cipher = function (palabras){
// tranformando el strings a código ascci y guardando en un array  
var transformAscci = [];
for (var i = 0; i <= string.length; i++){
	//guarda los numeros en un array para usarlos luego
	  transformAscci[transformAscci.length] = string.charCodeAt([i]);	//  
	} 

//iterando con la fórmula para mayúsculas diferenciando mayúsculas y minúsculas
var cesarOperation = [];
for (var j = 0; j < transformAscci.length; j++) {
	if (string.charCodeAt([i]) < 90 && string.charCodeAt([i]) > 65){
	cesarOperation[cesarOperation.length] =(((transformAscci[j]-65) + 33) % 26)+65;//para mayúsculas
	} else if (string.charCodeAt([i]) > 97 && string.charCodeAt([i]) < 127 ){
	cesarOperation[cesarOperation.length] =(((transformAscci[j]-65) + 33) % 26)+65;//para minúsculas
  return cesarOperation;
}

cipher();

//declara función decipher

var decipher = function (arreglo){

//transformando de ascci a string de nuevo
var cesarOperation = [cipher]
var cesarToAscci = []; 
for (var k = 0; k < cesarOperation.length; k++) {
	cesarToAscci[cesarToAscci.length] = String.fromCharCode(cesarOperation[k]);//pasando a string
}
var stringBack = cesarToAscci.join(); //uniendo las letras
return stringBack;
}
decipher();