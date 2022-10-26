let buying = true,
  total = 0,
  discount = 0;

const getDiscount = (total) => {
  if (total > 2500) {
    discount = total * 0.30;
    total = total - discount;
  } else if (total <= 2000 && total > 1000) {
    discount = total * 0.2;
    total = total - discount;
  } else {
    discount = total * 0.10;
    total = total - discount;
  }
  return total;
};

const addToCart = (product) => {
  switch (product) {
    case 1:
      total += 5200;
      break;
    case 2:
      total += 1800;
      break;
    case 3:
      total += 1500;
      break;
    case 4:
      total += 800;
      break;
  }
};

while (buying) {
  let products = parseInt(
    prompt(
      "Elija que producto desea agregar al carrito: 1.AceiteFullSpectrumCBD($5200), 2.CremaCBD($1800), 3.AceiteMascotasCBD($1500), 4.PomadaCutisCBD($800)"
    )
  );
  addToCart(products);

  let keepBuying = prompt("¿Desea seguir comprando? (si/no):");
  while (keepBuying !== "no" && keepBuying !== "si") {
    keepBuying = prompt("Responda: si/no");
  }

  if (keepBuying === "no") {
    buying = false;
    total = getDiscount(total);
  }
}

alert(`El total de su compra es de: $${total}. Ahorrado: $${discount}`);
