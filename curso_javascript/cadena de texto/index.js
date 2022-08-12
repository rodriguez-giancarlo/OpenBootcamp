//Una cadena de texto con tu Nombre
let nombre = "Giancarlo"
console.log(nombre)

//Otra cadena de texto con tu Apellido
let apellido = "Rodriguez"
console.log(apellido)

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante =" "+ nombre + " " + apellido +"  "
console.log(estudiante)

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus= estudiante.toLocaleUpperCase()
console.log(estudianteMayus)

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus= estudiante.toLocaleLowerCase()
console.log(estudianteMinus)

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let str_estudiante= estudiante.length
console.log(str_estudiante)

//Una variable que contenga la primera letra del Nombre
let primera_letra = nombre.charAt(0)
console.log(primera_letra)

// Otra variable que contenga la última letra del Apellido
let ultima_letra = apellido.charAt(apellido.length -1)
console.log(ultima_letra)

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let trim_estudiante = estudiante.trim()
console.log(trim_estudiante)

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let is_nombre = estudiante.includes(nombre)
console.log(is_nombre)
