document.addEventListener("DOMContentLoaded", () => {
  const nombreComprador = document.getElementById("nombre-comprador");
  const presupuestoMaximo = document.getElementById("presupuesto-maximo");
  const cantidadMaxima = document.getElementById("cantidad-maxima");
  const direccion = document.getElementById("direccion");
  const tipoEntrega = document.getElementsByName("tipo-entrega");
  const mensajeError = document.getElementById("mensaje-error");

  console.log("requerimientos.js está cargado correctamente");

  // Detecta la vista actual y ejecuta el código correspondiente
  if (document.getElementById("form-requerimientos")) {
    manejarRequerimientos();
  } else if (document.getElementById("seccion-productos")) {
    manejarProductos();
  }

  // Maneja la vista de Requerimientos de Compra
  function manejarRequerimientos() {
    document.getElementById("iniciar-compra").addEventListener("click", (e) => {
      e.preventDefault();
      mensajeError.style.display = "none";

      if (validarCampos()) {
        localStorage.setItem(
          "requerimientosCompra",
          JSON.stringify({
            nombre: nombreComprador.value,
            presupuesto: presupuestoMaximo.value,
            cantidadMaxima: cantidadMaxima.value,
            direccion: direccion.value,
            tipoEntrega: Array.from(tipoEntrega).find((radio) => radio.checked)
              .value,
          })
        );
        window.location.href = "productos.html"; // Redirige a productos.html
      } else {
        mensajeError.style.display = "block";
      }
    });

    function validarCampos() {
      if (
        nombreComprador.value.trim() === "" ||
        nombreComprador.value.length > 20
      ) {
        mensajeError.textContent =
          "El nombre es obligatorio y no debe exceder 20 caracteres.";
        return false;
      }

      if (isNaN(presupuestoMaximo.value) || presupuestoMaximo.value <= 0) {
        mensajeError.textContent =
          "El presupuesto debe ser un número positivo.";
        return false;
      }

      if (
        isNaN(cantidadMaxima.value) ||
        cantidadMaxima.value < 1 ||
        cantidadMaxima.value > 20
      ) {
        mensajeError.textContent =
          "La cantidad máxima debe ser un número entre 1 y 20.";
        return false;
      }

      if (direccion.value.trim() === "") {
        mensajeError.textContent = "La dirección es obligatoria.";
        return false;
      }

      if (!Array.from(tipoEntrega).some((radio) => radio.checked)) {
        mensajeError.textContent = "Debe seleccionar un tipo de entrega.";
        return false;
      }

      return true;
    }
  }

  // Maneja la vista de Productos
  function manejarProductos() {
    let productosMostrados = 0;
    cargarProductos();

    function cargarProductos() {
      const productos = JSON.parse(localStorage.getItem("productos")) || [];
      const listaProductos = document.getElementById("seccion-productos");
      const cantidadACargar = 15;

      for (
        let i = productosMostrados;
        i < productosMostrados + cantidadACargar && i < productos.length;
        i++
      ) {
        const producto = productos[i];
        const productoElemento = document.createElement("div");
        productoElemento.classList.add("producto-tarjeta");
        productoElemento.innerHTML = `
            <h4>${producto.nombre}</h4>
            <p>Precio: $${producto.precio}</p>
            <p>Categoría: ${producto.categoria}</p>
            <p>Stock: ${producto.stock}</p>
            <button onclick="verDetalleProducto(${producto.id})">Ver Detalle</button>
          `;
        listaProductos.appendChild(productoElemento);
      }

      productosMostrados += cantidadACargar;

      if (productosMostrados >= productos.length) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No hay más productos para cargar.";
        listaProductos.appendChild(mensaje);
      }
    }

    window.verDetalleProducto = function (id) {
      const productos = JSON.parse(localStorage.getItem("productos"));
      const producto = productos.find((p) => p.id === id);
      const detalleProducto = document.getElementById("detalle-producto");

      detalleProducto.innerHTML = `
          <h4>${producto.nombre}</h4>
          <p><strong>Precio:</strong> $${producto.precio}</p>
          <p><strong>Categoría:</strong> ${producto.categoria}</p>
          <p><strong>Stock:</strong> ${producto.stock}</p>
        `;
      document.getElementById("ver-detalle").style.display = "block";
    };

    document.getElementById("limpiar-filtros").addEventListener("click", () => {
      document.getElementById("filtro-categoria").value = "";
      document.getElementById("filtro-nombre").value = "";
      productosMostrados = 0;
      document.getElementById("seccion-productos").innerHTML = "";
      cargarProductos();
    });

    document.getElementById("modo-oscuro").addEventListener("click", () => {
      document.body.classList.toggle("oscuro");
    });

    document
      .getElementById("completar-compra")
      .addEventListener("click", () => {
        window.location.href = "carrito.html";
      });

    document.getElementById("cancelar-compra").addEventListener("click", () => {
      window.location.href = "index.html"; // Redirige a la vista de requerimientos
    });

    window.addEventListener("scroll", function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        cargarProductos();
      }
    });
  }
});
