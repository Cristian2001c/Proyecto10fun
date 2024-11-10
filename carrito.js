// Constantes y variables
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const cuerpoTablaCarrito = document.getElementById("cuerpo-tabla-carrito");
const totalProductosElemento = document.getElementById("total-productos");
const totalCompraElemento = document.getElementById("total-compra");
const totalFinalElemento = document.getElementById("total-final");
const cargoDomicilio = 15000;

let compraEnProgreso = false;

// Renderizar el carrito en la tabla
function renderizarCarrito() {
  console.log("Carrito actual:", carrito); // Depuración para verificar el contenido del carrito

  let totalProductos = 0;
  let totalCompra = 0;

  cuerpoTablaCarrito.innerHTML = "";
  if (carrito.length === 0) {
    cuerpoTablaCarrito.innerHTML =
      "<tr><td colspan='5'>No hay productos en el carrito.</td></tr>";
    totalFinalElemento.textContent = "$0";
    return;
  }

  carrito.forEach((producto, index) => {
    const totalProducto = producto.precio * producto.cantidad;
    totalCompra += totalProducto;
    totalProductos += producto.cantidad;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td>$${totalProducto}</td>
      <td><button class="eliminar-producto" data-index="${index}">Eliminar</button></td>
    `;
    cuerpoTablaCarrito.appendChild(fila);
  });

  totalProductosElemento.textContent = totalProductos;
  totalCompraElemento.textContent = `$${totalCompra}`;
  totalFinalElemento.textContent = `$${
    totalCompra + (totalProductos > 0 ? cargoDomicilio : 0)
  }`;
}

// Evento para eliminar un producto del carrito
document.addEventListener("click", function (e) {
  if (compraEnProgreso) {
    alert("Hay una compra en progreso, por favor espera.");
    return;
  }

  if (e.target.classList.contains("eliminar-producto")) {
    const index = e.target.getAttribute("data-index");
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
  }
});

// Confirmar compra
document
  .getElementById("confirmar-compra")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (compraEnProgreso) {
      alert("Hay una compra en progreso, por favor espera.");
      return;
    }

    if (carrito.length === 0) {
      alert("El carrito está vacío.");
      return;
    }

    const numeroTarjeta = document.getElementById("numero-tarjeta").value;
    const nombreTitular = document.getElementById("nombre-titular").value;
    const cantidadProductos = parseInt(totalProductosElemento.textContent);
    const totalCompra = parseInt(
      totalCompraElemento.textContent.replace("$", "")
    );
    const presupuestoMaximo = 500000; // Cambia este valor según tu lógica

    if (!numeroTarjeta || !nombreTitular) {
      alert("Complete la información de la tarjeta.");
      return;
    }

    // Deshabilitar botón de confirmar compra
    const botonConfirmar = document.getElementById("confirmar-compra");
    botonConfirmar.disabled = true;
    compraEnProgreso = true;

    // Simular validación con promesa
    const validacionPromesa = new Promise((resolve, reject) => {
      const tiempoValidacion = Math.random() * (3000 - 2000) + 2000;

      setTimeout(() => {
        if (cantidadProductos > 20) {
          reject("La cantidad de productos no puede superar los 20.");
        } else if (totalCompra > presupuestoMaximo) {
          reject(
            "El total de la compra excede el presupuesto máximo definido."
          );
        } else if (numeroTarjeta.length !== 16) {
          reject("El número de tarjeta debe contener 16 dígitos.");
        } else {
          resolve("Pago realizado con éxito.");
        }
      }, tiempoValidacion);
    });

    validacionPromesa
      .then((mensajeExito) => {
        alert(mensajeExito);
        localStorage.removeItem("carrito");
        window.location.href = "index.html";
      })
      .catch((mensajeError) => {
        alert(`Error: ${mensajeError}`);
      })
      .finally(() => {
        // Rehabilitar botón de confirmar compra y resetear el estado de la compra
        botonConfirmar.disabled = false;
        compraEnProgreso = false;
        renderizarCarrito(); // Actualizar la vista del carrito
      });
  });

// Limpiar formulario de tarjeta
document.getElementById("limpiar-form").addEventListener("click", function () {
  if (compraEnProgreso) {
    alert("Hay una compra en progreso, por favor espera.");
    return;
  }
  document.getElementById("form-tarjeta").reset();
});

// Inicializar la vista del carrito
document.addEventListener("DOMContentLoaded", renderizarCarrito);

// Botón Cancelar Compra
document.getElementById("btn-cancelar-compra").addEventListener("click", () => {
  if (compraEnProgreso) {
    alert("Hay una compra en progreso, por favor espera.");
    return;
  }

  const confirmacion = confirm(
    "¿Estás seguro de que deseas cancelar la compra?"
  );

  if (confirmacion) {
    localStorage.removeItem("carrito"); // Elimina el carrito del localStorage
    window.location.href = "index.html"; // Cambia 'index.html' por el nombre de tu página principal
  }
});

console.log("carrito.js está cargado correctamente");
