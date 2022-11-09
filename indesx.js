let compra = true,
    total = 0,
    descuento = 0

    let aceiteCBD = {
        precio: 5000,
        stock: 2
    }
    
    let aceiteTHC = {
        precio: 8000,
        stock: 2
    }
    
    let pomadaCBD = {
        precio: 10000,
        stock: 2
    }
    
    let cremaTHC = {
        precio: 7500,
        stock: 2
    }



function descuentos (total) {
    if (total > 20000) {
        descuento = total * 0.25
        total = total - descuento
    } else if (total <= 20000 && total > 10000) {
        descuento = total * 0.18
        total = total - descuento
    } else {
        descuento = total * 0.15
        total = total - descuento
    }
    return total
}

function opciones (opcion) {
    switch (opcion) {
        case 1:
            if (aceiteCBD.stock > 0) {
            alert(`el precio es de: $${aceiteCBD.precio} y el stock es de: ${aceiteCBD.stock}`)
            let comprar = prompt ("¿desea comprar el producto? (si/no):")
            if (comprar === "si"){
                total += aceiteCBD.precio
                alert (`añadido al carrito`)
                aceiteCBD.stock = aceiteCBD.stock - 1
               }
            }
            else{
                alert (`no hay stock del producto`)
            }
            break;
        case 2:
            if (aceiteTHC.stock > 0) {
                alert(`el precio es de: $${aceiteTHC.precio} y el stock es de: ${aceiteTHC.stock}`)
                let comprar = prompt ("¿desea comprar el producto? (si/no):")
                if (comprar === "si"){
                    total += aceiteTHC.precio
                    alert (`añadido al carrito`)
                    aceiteTHC.stock = aceiteTHC.stock - 1
                   }
                }
                else{
                    alert (`no hay stock del producto`)
                }
            break;
        case 3:
            if (pomadaCBD.stock > 0) {
                alert(`el precio es de: $${pomadaCBD.precio} y el stock es de: ${pomadaCBD.stock}`)
                let comprar = prompt ("¿desea comprar el producto? (si/no):")
                if (comprar === "si"){
                    total += pomadaCBD.precio
                    alert (`añadido al carrito`)
                    pomadaCBD.stock = pomadaCBD.stock - 1
                   }
                }
                else{
                    alert (`no hay stock del producto`)
                }
            break;
        case 4:
            if (cremaTHC.stock > 0) {
                alert(`el precio es de: $${cremaTHC.precio} y el stock es de: ${cremaTHC.stock}`)
                let comprar = prompt ("¿desea comprar el producto? (si/no):")
                if (comprar === "si"){
                    total += cremaTHC.precio
                    alert (`añadido al carrito`)
                    cremaTHC.stock = cremaTHC.stock - 1
                   }
                }
                else{
                    alert (`no hay stock del producto`)
                }
            break;
        case 5:
            compra = false
            break;
    }
}
while (compra) {
    
    
    let opcion = parseInt(prompt("Ingrese el numero de la opcion para mas informacion: 1.aceiteCBD, 2.aceiteTHC, 3.pomadaCBD, 4.cremaTHC, 5.terminar compra"))
    opciones(opcion)

   
    if (compra === false) {
        total = descuentos(total)
    }
}
alert(`El total de su compra es de: $${total}, el descuento aplicado es de: $${descuento}`)