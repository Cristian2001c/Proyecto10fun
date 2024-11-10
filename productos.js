console.log("productos.js está cargado correctamente");

const productos = [
  {
    id: 1,
    nombre: "Auriculares inalámbricos con cancelación de ruido",
    precio: 120000,
    categoria: "Periféricos y Audio",
    stock: 30,
    url: "./imagenes/Auriculares1.jpg",
  },
  {
    id: 2,
    nombre: "Teclado mecánico RGB para gaming",
    precio: 95000,
    categoria: "Periféricos y Audio",
    stock: 20,
    url: "https://i.pinimg.com/564x/36/4c/aa/364caad8bbcc0681cc7179d85d38e228.jpg",
  },
  {
    id: 3,
    nombre: "Ratón ergonómico inalámbrico",
    precio: 40000,
    categoria: "Periféricos y Audio",
    stock: 50,
    url: "https://static.vecteezy.com/system/resources/thumbnails/036/709/536/small_2x/ai-generated-skull-dj-with-headphones-and-turntable-illustration-on-transparent-background-png.png",
  },
  {
    id: 4,
    nombre: "Altavoz Bluetooth portátil con luces LED",
    precio: 70000,
    categoria: "Periféricos y Audio",
    stock: 25,
    url: "./imagenes/default.jpg", // Cambiado
  },
  {
    id: 5,
    nombre: "Micrófono USB para streaming",
    precio: 80000,
    categoria: "Periféricos y Audio",
    stock: 15,
    url: "imagen del producto",
  },
  {
    id: 6,
    nombre: "Auriculares deportivos resistentes al agua",
    precio: 45000,
    categoria: "Periféricos y Audio",
    stock: 40,
    url: "imagen del producto",
  },
  {
    id: 7,
    nombre: "Barras de sonido para TV",
    precio: 150000,
    categoria: "Periféricos y Audio",
    stock: 10,
    url: "imagen del producto",
  },
  {
    id: 8,
    nombre: "Auriculares gaming con micrófono integrado",
    precio: 60000,
    categoria: "Periféricos y Audio",
    stock: 35,
    url: "imagen del producto",
  },
  {
    id: 9,
    nombre: "Teclado compacto inalámbrico",
    precio: 35000,
    categoria: "Periféricos y Audio",
    stock: 30,
    url: "imagen del producto",
  },
  {
    id: 10,
    nombre: "Altavoz inteligente con asistente de voz",
    precio: 90000,
    categoria: "Periféricos y Audio",
    stock: 20,
    url: "imagen del producto",
  },
  {
    id: 11,
    nombre: "Ratón para gaming con retroiluminación RGB",
    precio: 55000,
    categoria: "Periféricos y Audio",
    stock: 25,
    url: "imagen del producto",
  },
  {
    id: 12,
    nombre: "Auriculares con cable de alta fidelidad",
    precio: 50000,
    categoria: "Periféricos y Audio",
    stock: 45,
    url: "imagen del producto",
  },
  {
    id: 13,
    nombre: "Sistema de altavoces 2.1 para computadora",
    precio: 110000,
    categoria: "Periféricos y Audio",
    stock: 12,
    url: "imagen del producto",
  },
  {
    id: 14,
    nombre: "Soporte para auriculares con puerto USB",
    precio: 20000,
    categoria: "Periféricos y Audio",
    stock: 50,
    url: "imagen del producto",
  },
  {
    id: 15,
    nombre: "Micrófono de condensador para podcast",
    precio: 85000,
    categoria: "Periféricos y Audio",
    stock: 15,
    url: "imagen del producto",
  },
  {
    id: 16,
    nombre: "Auriculares in-ear con conector USB-C",
    precio: 30000,
    categoria: "Periféricos y Audio",
    stock: 60,
    url: "imagen del producto",
  },
  {
    id: 17,
    nombre: "Teclado numérico externo USB",
    precio: 15000,
    categoria: "Periféricos y Audio",
    stock: 70,
    url: "imagen del producto",
  },
  {
    id: 18,
    nombre: "Ratón vertical ergonómico con cable",
    precio: 38000,
    categoria: "Periféricos y Audio",
    stock: 20,
    url: "imagen del producto",
  },
  {
    id: 19,
    nombre: "Altavoz portátil resistente al agua",
    precio: 75000,
    categoria: "Periféricos y Audio",
    stock: 25,
    url: "imagen del producto",
  },
  {
    id: 20,
    nombre: "Kit de teclado y ratón inalámbricos",
    precio: 50000,
    categoria: "Periféricos y Audio",
    stock: 30,
    url: "imagen del producto",
  },
  {
    id: 21,
    nombre: "Soporte articulado para monitor",
    precio: 55000,
    categoria: "Soportes y Conectividad",
    stock: 20,
    url: "imagen del producto",
  },
  {
    id: 22,
    nombre: "Cámara de seguridad IP WiFi",
    precio: 120000,
    categoria: "Soportes y Conectividad",
    stock: 15,
    url: "imagen del producto",
  },
  {
    id: 23,
    nombre: "Soporte ajustable para laptop",
    precio: 30000,
    categoria: "Soportes y Conectividad",
    stock: 25,
    url: "imagen del producto",
  },
  {
    id: 24,
    nombre: "Repetidor WiFi de doble banda",
    precio: 60000,
    categoria: "Soportes y Conectividad",
    stock: 30,
    url: "imagen del producto",
  },
  {
    id: 25,
    nombre: "Soporte para tablet ajustable",
    precio: 20000,
    categoria: "Soportes y Conectividad",
    stock: 40,
    url: "imagen del producto",
  },
  {
    id: 26,
    nombre: "Base de carga inalámbrica para smartphone",
    precio: 45000,
    categoria: "Soportes y Conectividad",
    stock: 35,
    url: "imagen del producto",
  },
  {
    id: 27,
    nombre: "Soporte para proyector de techo",
    precio: 80000,
    categoria: "Soportes y Conectividad",
    stock: 10,
    url: "imagen del producto",
  },
  {
    id: 28,
    nombre: "Extensor de señal WiFi para exteriores",
    precio: 95000,
    categoria: "Soportes y Conectividad",
    stock: 20,
    url: "imagen del producto",
  },
  {
    id: 29,
    nombre: "Soporte para teléfono móvil para automóvil",
    precio: 18000,
    categoria: "Soportes y Conectividad",
    stock: 50,
    url: "imagen del producto",
  },
  {
    id: 30,
    nombre: "Cámara de videovigilancia con visión nocturna",
    precio: 130000,
    categoria: "Soportes y Conectividad",
    stock: 12,
    url: "imagen del producto",
  },
  {
    id: 31,
    nombre: "Router WiFi de alta velocidad",
    precio: 150000,
    categoria: "Soportes y Conectividad",
    stock: 10,
    url: "imagen del producto",
  },
  {
    id: 32,
    nombre: "Soporte plegable para laptop",
    precio: 25000,
    categoria: "Soportes y Conectividad",
    stock: 30,
    url: "imagen del producto",
  },
  {
    id: 33,
    nombre: "Extensor de puerto USB para escritorio",
    precio: 20000,
    categoria: "Soportes y Conectividad",
    stock: 40,
    url: "imagen del producto",
  },
  {
    id: 34,
    nombre: "Cámara para timbre de puerta con WiFi",
    precio: 95000,
    categoria: "Soportes y Conectividad",
    stock: 15,
    url: "imagen del producto",
  },
  {
    id: 35,
    nombre: "Base magnética para cargar smartwatch",
    precio: 35000,
    categoria: "Soportes y Conectividad",
    stock: 25,
    url: "imagen del producto",
  },
  {
    id: 36,
    nombre: "Cámara web Full HD para videoconferencias",
    precio: 60000,
    categoria: "Soportes y Conectividad",
    stock: 30,
    url: "imagen del producto",
  },
  {
    id: 37,
    nombre: "Soporte para monitor dual",
    precio: 85000,
    categoria: "Soportes y Conectividad",
    stock: 15,
    url: "imagen del producto",
  },
  {
    id: 38,
    nombre: "Punto de acceso inalámbrico para interiores",
    precio: 110000,
    categoria: "Soportes y Conectividad",
    stock: 20,
    url: "imagen del producto",
  },
  {
    id: 39,
    nombre: "Soporte giratorio para altavoz",
    precio: 30000,
    categoria: "Soportes y Conectividad",
    stock: 25,
    url: "imagen del producto",
  },
  {
    id: 40,
    nombre: "Cámara de seguridad resistente al clima",
    precio: 140000,
    categoria: "Soportes y Conectividad",
    stock: 18,
    url: "imagen del producto",
  },
];

// Guardar los productos en el localStorage si no existen
if (!localStorage.getItem("productos")) {
  localStorage.setItem("productos", JSON.stringify(productos));
}

document.addEventListener("DOMContentLoaded", () => {
  manejarProductos();
});

function manejarProductos() {
  let productosMostrados = 0;
  cargarProductos();

  // Función para cargar productos al contenedor
  function cargarProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
    const cantidadACargar = 15;

    for (
      let i = productosMostrados;
      i < productosMostrados + cantidadACargar && i < productos.length;
      i++
    ) {
      const producto = productos[i];
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("producto-tarjeta");
      tarjeta.innerHTML = `
          <img src="${producto.url}" alt="${producto.nombre}" class="imagen-tarjeta" onerror="this.onerror=null;this.src='default.jpg';">
          <h4>${producto.nombre}</h4>
          <p><strong>Precio:</strong> $${producto.precio}</p>
          <p><strong>Categoría:</strong> ${producto.categoria}</p>
          <p><strong>Stock:</strong> ${producto.stock}</p>
          <button onclick="verDetalleProducto(${producto.id})">Ver Detalle</button>
        `;
      contenedorTarjetas.appendChild(tarjeta);
    }

    productosMostrados += cantidadACargar;

    if (productosMostrados >= productos.length) {
      const mensaje = document.createElement("p");
      mensaje.textContent = "No hay más productos para cargar.";
      contenedorTarjetas.appendChild(mensaje);
    }
  }

  // Mostrar detalles del producto seleccionado
  window.verDetalleProducto = function (id) {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const producto = productos.find((p) => p.id === id);
    if (!producto) {
      alert("Producto no encontrado.");
      return;
    }

    const imagenDetalle = document.getElementById("imagen-detalle");
    imagenDetalle.src = producto.url;
    imagenDetalle.alt = producto.nombre;

    const detalleProducto = document.getElementById("detalle-producto");
    detalleProducto.dataset.id = producto.id;
    detalleProducto.innerHTML = `
        <h4>${producto.nombre}</h4>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
        <p><strong>Stock:</strong> ${producto.stock}</p>
      `;

    document.getElementById("ver-detalle").style.display = "block";
  };

  // Filtrar productos
  document
    .getElementById("filtrar")
    .addEventListener("click", filtrarProductos);

  function filtrarProductos() {
    const categoria = document.getElementById("filtro-categoria").value;
    const nombre = document.getElementById("filtro-nombre").value.toLowerCase();
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const productosFiltrados = productos.filter(
      (producto) =>
        (!categoria || producto.categoria === categoria) &&
        (!nombre || producto.nombre.toLowerCase().includes(nombre))
    );

    const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
    contenedorTarjetas.innerHTML = "";

    productosFiltrados.forEach((producto) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("producto-tarjeta");
      tarjeta.innerHTML = `
        <img src="${producto.url}" alt="${producto.nombre}" class="imagen-tarjeta" onerror="this.onerror=null;this.src='default.jpg';">
        <h4>${producto.nombre}</h4>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
        <p><strong>Stock:</strong> ${producto.stock}</p>
        <button onclick="verDetalleProducto(${producto.id})">Ver Detalle</button>
      `;
      contenedorTarjetas.appendChild(tarjeta);
    });

    productosMostrados = productosFiltrados.length;
  }

  // Limpiar filtros y recargar productos
  document.getElementById("limpiar-filtros").addEventListener("click", () => {
    document.getElementById("filtro-categoria").value = "";
    document.getElementById("filtro-nombre").value = "";
    productosMostrados = 0;
    document.getElementById("contenedor-tarjetas").innerHTML = "";
    cargarProductos();
  });

  // Scroll infinito para cargar más productos
  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      cargarProductos();
    }
  });

  // Agregar al Carrito
  document.getElementById("agregar-carrito").addEventListener("click", () => {
    const productoId = document.getElementById("detalle-producto").dataset.id;
    const cantidad = parseInt(
      document.getElementById("cantidad-producto").value
    );

    if (!productoId || cantidad <= 0) {
      alert("Selecciona un producto y una cantidad válida.");
      return;
    }

    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const producto = productos.find((p) => p.id == productoId);

    if (producto && producto.stock >= cantidad) {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push({ ...producto, cantidad });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert("Producto agregado al carrito.");
    } else {
      alert("Stock insuficiente para la cantidad solicitada.");
    }
  });

  // Completar compra (redirigir al carrito)
  document.getElementById("completar-compra").addEventListener("click", () => {
    window.location.href = "carrito.html"; // Redirige a una página de carrito (asegúrate de crear esta página)
  });

  // Cancelar compra y volver a la vista de requerimientos
  document.getElementById("cancelar-compra").addEventListener("click", () => {
    window.location.href = "requerimientos.html";
  });
}
