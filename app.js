let inicio = "SushiStyle";

//alerta de bienvenida al usuario
alert("Bienvenido a SushiStyle");

//indicar al usuario que ingrese su nombre y saludarlo
let nombre = prompt("Ingresa tu nombre");
alert("Hola " + nombre + " ¿Cómo estás,deseas realizar un pedido?");

let resultado = confirm("¿Eres mayor de 18 años?");

if (resultado) {
    console.log("Eres mayor de 18 años");
}   else { 
    console.log("Eres menor de 18 años");            
}       
//indicar al usuario que ingrese su edad y si es menor de 18 no continuar


 
const edad = prompt("Ingresa fecha de nacimento para verificar tu edad");

edad === 18 ? console.log("Edad válida") : console.log("Edad inválida");

if (edad < 18) {
    console.log("No puedes continuar");
} else if (edad <= 18) {
    console.log("Puedes continuar");            
} 


 
//indicar al usuario que ingrese su mail (opcional)
let mail = prompt("Ingresa tu mail si deseas  registrarte y recibir nuestras promociones,caso contrario ingresa cualquier tecla y continua");
if (mail.includes("@")) {
    console.log("Mail registrado con éxito");
} else {
    console.log("Mail inválido");
}        
//indicar al usuario que ingrese su numero de telefono y si es incorrecto no continuar
let numer = prompt("Ingresa tu número de teléfono para poder realizar tu compra online y estar en contacto,si no ingresas aqui tu numero no vamos a poder tener en cuenta tu pedido.");
if (numer.length === 10) {
    console.log("Número registrado con éxito");
} else {     
    console.log("Número inválido");
}
//indicar al usuario que ingrese su dirección
let direccion = prompt("Ingresa tu dirección para poder recibir tu pedido");            
if (direccion.length > 0) {
    console.log("Dirección registrada con éxito");
} else {    
    console.log("Dirección inválida");
     

}   

let menu = prompt("¿Qué deseas pedir? \n 1. Sushi \n 2. SushiBurguers \n 3. Gyozas \n 4. Bebidas \n 5. Postres");
if (menu === "1") {
    console.log("Sushi");
} else if (menu === "2") {
    console.log("SushiBurguers");
} else if (menu === "3") {
    console.log("Gyozas");
} else if (menu === "4") { 
    console.log("Bebidas");
    let bebida = prompt("¿Qué bebida deseas? \n 1. Agua \n 2. Gaseosa \n 3. Cerveza \n 4. Vino \n 5. Jugo");
    if (bebida === "1") {
        console.log("Agua");
    } else if (bebida === "2") {
        console.log("Gaseosa");
    } else if (bebida === "3") {
        console.log("Cerveza");
    } else if (bebida === "4") {
        console.log("Vino");
    } else if (bebida === "5") {
        console.log("Jugo");
    } else {
        console.log("Opción inválida");
    }
}
else if (menu === "5") {
    console.log("Postres");
    let postre = prompt("¿Qué postre deseas? \n 1. Helado \n 2. Tiramisú \n 3. Cheesecake \n 4. Brownie \n 5. Frutas");
    if (postre === "1") {
        console.log("Helado");
    } else if (postre === "2") {
        console.log("Tiramisú");
    } else if (postre === "3") {
        console.log("Cheesecake");
    } else if (postre === "4") {
        console.log("Brownie");
    } else if (postre === "5") {
        console.log("Frutas");
    } else {
        console.log("Opción inválida");
    }
}
else {
    console.log("Opción inválida");
}
let cantidad = prompt("¿Cuántas unidades deseas?");
console.log("Tu pedido ha sido registrado con éxito. Gracias por elegirnos");

let mediodepago = ["Efectivo", "Tarjeta de crédito", "Tarjeta de débito", "MercadoPago", "PayPal"];
 

console.log("Cantidad de medios de pago disponibles: " + mediodepago.length);

for (let i = 0; i < mediodepago.length; i++) {
    console.log(mediodepago[i]);

}

mediodepago.push("Bitcoin");

console.log("Cantidad de medios de pago disponibles: " + mediodepago.length);   

for (let i = 0; i < mediodepago.length; i++) {
    console.log(mediodepago[i]);
   
}   

let mediodepagoElegido = prompt("Elegí un medio de pago: \n 1. Efectivo \n 2. Tarjeta de crédito \n 3. Tarjeta de débito \n 4. MercadoPago \n 5. PayPal \n 6. Bitcoin");

if (mediodepagoElegido === "1") {
    console.log("Efectivo");
}
else if (mediodepagoElegido === "2") {
    console.log("Tarjeta de crédito");
}
else if (mediodepagoElegido === "3") {
    console.log("Tarjeta de débito");
}
else if (mediodepagoElegido === "4") {
    console.log("MercadoPago");
}
else if (mediodepagoElegido === "5") {
    console.log("PayPal");
}
else if (mediodepagoElegido === "6") {
    console.log("Bitcoin");
}
else {
    console.log("Opción inválida");
}


