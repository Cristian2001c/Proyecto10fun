console.log("productos.js está cargado correctamente");

const productos = [
  {
    id: 1,
    nombre: "Auriculares inalámbricos con cancelación de ruido",
    precio: 80000,
    categoria: "Periféricos y Audio",
    stock: 30,
    url: "https://i.pinimg.com/564x/fa/5c/b1/fa5cb10ffd836f76169dd750ae1ccb4c.jpg",
  },
  {
    id: 2,
    nombre: "Teclado mecánico RGB para gaming",
    precio: 95000,
    categoria: "Periféricos y Audio",
    stock: 20,
    url: "https://i.pinimg.com/564x/77/ca/6b/77ca6bd2f92ab1b4d7d7b7c9b47c4d9b.jpg",
  },
  {
    id: 3,
    nombre: "Ratón ergonómico inalámbrico",
    precio: 40000,
    categoria: "Periféricos y Audio",
    stock: 50,
    url: "https://i.pinimg.com/564x/ab/99/0e/ab990e1f5e8aa8acf91dc2db439c615f.jpg",
  },
  {
    id: 4,
    nombre: "Altavoz Bluetooth portátil con luces LED",
    precio: 70000,
    categoria: "Periféricos y Audio",
    stock: 25,
    url: "https://i.pinimg.com/564x/cb/22/5f/cb225fd33df8f97f3a066cae8c833d05.jpg",
  },
  {
    id: 5,
    nombre: "Micrófono USB para streaming",
    precio: 110000,
    categoria: "Periféricos y Audio",
    stock: 15,
    url: "https://i.pinimg.com/564x/7b/37/46/7b3746f717ebf9a6c00d382734f08036.jpg",
  },
  {
    id: 6,
    nombre: "Auriculares deportivos resistentes al agua",
    precio: 75000,
    categoria: "Periféricos y Audio",
    stock: 40,
    url: "https://i.pinimg.com/564x/db/2f/50/db2f507cd044df98fa7dc09aa1dcb879.jpg",
  },
  {
    id: 7,
    nombre: "Barras de sonido para TV",
    precio: 150000,
    categoria: "Periféricos y Audio",
    stock: 10,
    url: "https://i.pinimg.com/564x/a3/6e/6e/a36e6e7984dd21dfa57a9dfaa4e93dc2.jpg",
  },
  {
    id: 8,
    nombre: "Auriculares gaming con micrófono integrado",
    precio: 90000,
    categoria: "Periféricos y Audio",
    stock: 35,
    url: "https://i.pinimg.com/564x/23/a5/6a/23a56ac9a2f61c4ce77cd161fca2fc78.jpg",
  },
  {
    id: 9,
    nombre: "Teclado compacto inalámbrico",
    precio: 35000,
    categoria: "Periféricos y Audio",
    stock: 30,
    url: "https://i.pinimg.com/564x/75/ab/71/75ab71f1d923b9f060bee900380533fb.jpg",
  },
  {
    id: 10,
    nombre: "Altavoz inteligente con asistente de voz",
    precio: 90000,
    categoria: "Periféricos y Audio",
    stock: 20,
    url: "https://i.pinimg.com/564x/6d/7f/48/6d7f48de32c73eb993febecf1dcdcc67.jpg",
  },
  {
    id: 11,
    nombre: "Ratón para gaming con retroiluminación RGB",
    precio: 55000,
    categoria: "Periféricos y Audio",
    stock: 25,
    url: "https://i.pinimg.com/564x/f9/20/06/f920067f7d78218df227e9faaf7529ea.jpg",
  },
  {
    id: 12,
    nombre: "Auriculares con cable de alta fidelidad",
    precio: 50000,
    categoria: "Periféricos y Audio",
    stock: 45,
    url: "https://i.pinimg.com/564x/3c/b1/09/3cb1094e16851291d07fe02193b0f33e.jpg",
  },
  {
    id: 13,
    nombre: "Sistema de altavoces 2.1 para computadora",
    precio: 110000,
    categoria: "Periféricos y Audio",
    stock: 12,
    url: "https://i.pinimg.com/564x/55/b0/f7/55b0f7aba1034340b7c1362bcde201e6.jpg",
  },
  {
    id: 14,
    nombre: "Soporte para auriculares con puerto USB",
    precio: 20000,
    categoria: "Periféricos y Audio",
    stock: 50,
    url: "https://i.pinimg.com/564x/7e/95/3a/7e953a5a5d86cbbc6ba0e66cb7b70745.jpg",
  },
  {
    id: 15,
    nombre: "Micrófono de condensador para podcast",
    precio: 85000,
    categoria: "Periféricos y Audio",
    stock: 15,
    url: "https://i.pinimg.com/564x/ad/6e/d2/ad6ed2d0d367928b3d56d561f3feb0f2.jpg",
  },
  {
    id: 16,
    nombre: "Auriculares in-ear con conector USB-C",
    precio: 30000,
    categoria: "Periféricos y Audio",
    stock: 60,
    url: "https://i.pinimg.com/564x/34/da/3a/34da3a9b0c47d2cd0f1a48d77555da5e.jpg",
  },
  {
    id: 17,
    nombre: "Teclado numérico externo USB",
    precio: 15000,
    categoria: "Periféricos y Audio",
    stock: 70,
    url: "https://i.pinimg.com/564x/ac/38/c3/ac38c39532f22f27525c5f779fac1a43.jpg",
  },
  {
    id: 18,
    nombre: "Ratón vertical ergonómico con cable",
    precio: 38000,
    categoria: "Periféricos y Audio",
    stock: 20,
    url: "https://i.pinimg.com/564x/fd/9e/39/fd9e39ed8d7902941ef6126493ebd3b5.jpg",
  },
  {
    id: 19,
    nombre: "Altavoz portátil resistente al agua",
    precio: 75000,
    categoria: "Periféricos y Audio",
    stock: 25,
    url: "https://i.pinimg.com/564x/b9/3b/75/b93b757144cf51caddd3eda9a134f7e3.jpg",
  },
  {
    id: 20,
    nombre: "Kit de teclado y ratón inalámbricos",
    precio: 50000,
    categoria: "Periféricos y Audio",
    stock: 30,
    url: "https://i.pinimg.com/736x/70/8d/a6/708da6f6576c305a58018a6a10a0508e.jpg",
  },
  {
    id: 21,
    nombre: "Soporte articulado para monitor",
    precio: 55000,
    categoria: "Soportes y Conectividad",
    stock: 20,
    url: "https://i.pinimg.com/564x/51/34/c7/5134c77d63b78d0f59467f193b023781.jpg",
  },
  {
    id: 22,
    nombre: "Cámara de seguridad IP WiFi",
    precio: 120000,
    categoria: "Soportes y Conectividad",
    stock: 15,
    url: "https://i.pinimg.com/564x/7c/29/72/7c297261dbebacdfe9e0d049b442de88.jpg",
  },
  {
    id: 23,
    nombre: "Soporte ajustable para laptop",
    precio: 30000,
    categoria: "Soportes y Conectividad",
    stock: 25,
    url: "https://i.pinimg.com/564x/c7/b8/1e/c7b81e8ee7f38b032d3ca642a4da519e.jpg",
  },
  {
    id: 24,
    nombre: "Repetidor WiFi de doble banda",
    precio: 60000,
    categoria: "Soportes y Conectividad",
    stock: 30,
    url: "https://i.pinimg.com/564x/56/b2/fa/56b2fab4dd342579e73c9f80a29c0ccb.jpg",
  },
  {
    id: 25,
    nombre: "Soporte para tablet ajustable",
    precio: 20000,
    categoria: "Soportes y Conectividad",
    stock: 40,
    url: "https://i.pinimg.com/564x/8d/fe/0e/8dfe0e4a7228545a400fb6d33c372008.jpg",
  },
  {
    id: 26,
    nombre: "Base de carga inalámbrica para smartphone",
    precio: 45000,
    categoria: "Soportes y Conectividad",
    stock: 35,
    url: "https://i.pinimg.com/736x/b2/f2/9e/b2f29e9e8daa16913f24713eade2536d.jpg",
  },
  {
    id: 27,
    nombre: "Soporte para proyector de techo",
    precio: 80000,
    categoria: "Soportes y Conectividad",
    stock: 10,
    url: "https://i.pinimg.com/564x/43/18/51/43185175bb45e048248ef516405e9dcb.jpg",
  },
  {
    id: 28,
    nombre: "Extensor de señal WiFi para exteriores",
    precio: 95000,
    categoria: "Soportes y Conectividad",
    stock: 20,
    url: "https://i.pinimg.com/564x/ff/43/17/ff431707da50566015229e6314ca8469.jpg",
  },
  {
    id: 29,
    nombre: "Soporte para teléfono móvil para automóvil",
    precio: 18000,
    categoria: "Soportes y Conectividad",
    stock: 50,
    url: "https://i.pinimg.com/564x/89/1a/a2/891aa2f4d7a5635643f98837f0b76f15.jpg",
  },
  {
    id: 30,
    nombre: "Cámara de videovigilancia con visión nocturna",
    precio: 130000,
    categoria: "Soportes y Conectividad",
    stock: 12,
    url: "https://i.pinimg.com/564x/48/31/0d/48310d08c337c052d3c47d1dbb8323f0.jpg",
  },
  {
    id: 31,
    nombre: "Router Inalambrico WiFi de alta velocidad",
    precio: 150000,
    categoria: "Soportes y Conectividad",
    stock: 10,
    url: "https://i.pinimg.com/564x/de/d7/7f/ded77fef62369baea6434b7bcf98dd71.jpg",
  },
  {
    id: 32,
    nombre: "Soporte plegable para laptop",
    precio: 25000,
    categoria: "Soportes y Conectividad",
    stock: 30,
    url: "https://i.pinimg.com/564x/1a/03/a1/1a03a1301a12dc7c92309213be316043.jpg",
  },
  {
    id: 33,
    nombre: "Extensor de puerto USB para escritorio",
    precio: 20000,
    categoria: "Soportes y Conectividad",
    stock: 40,
    url: "https://i.pinimg.com/564x/18/02/a8/1802a8918961fed05a08dc34dd584142.jpg",
  },
  {
    id: 34,
    nombre: "Cámara para timbre de puerta con WiFi",
    precio: 95000,
    categoria: "Soportes y Conectividad",
    stock: 15,
    url: "https://i.pinimg.com/564x/b6/2c/07/b62c07d0dbab38779bb66c3aec5bb7c1.jpg",
  },
  {
    id: 35,
    nombre: "Base magnética para cargar smartwatch",
    precio: 35000,
    categoria: "Soportes y Conectividad",
    stock: 25,
    url: "https://i.pinimg.com/564x/1e/04/19/1e04196cbb409804f754e37454143e2c.jpg",
  },
  {
    id: 36,
    nombre: "Cámara web Full HD para videoconferencias",
    precio: 60000,
    categoria: "Soportes y Conectividad",
    stock: 30,
    url: "https://i.pinimg.com/564x/35/82/6e/35826e405d5fdef3b6db9ba29a0d19ba.jpg",
  },
  {
    id: 37,
    nombre: "Soporte para monitor dual",
    precio: 85000,
    categoria: "Soportes y Conectividad",
    stock: 15,
    url: "https://i.pinimg.com/564x/7b/00/51/7b0051334a80b474c1e889b2fa038e32.jpg",
  },
  {
    id: 38,
    nombre: "Punto de acceso inalámbrico para interiores",
    precio: 110000,
    categoria: "Soportes y Conectividad",
    stock: 20,
    url: "https://i.pinimg.com/564x/11/5a/32/115a32861bc99d86a3660d3bd97d7410.jpg",
  },
  {
    id: 39,
    nombre: "Soporte giratorio para altavoz",
    precio: 30000,
    categoria: "Soportes y Conectividad",
    stock: 25,
    url: "https://i.pinimg.com/564x/fe/fd/98/fefd985abbaeef268f57022ac4dd21e1.jpg",
  },
  {
    id: 40,
    nombre: "Cámara de seguridad resistente al clima",
    precio: 140000,
    categoria: "Soportes y Conectividad",
    stock: 18,
    url: "https://i.pinimg.com/736x/47/de/f5/47def5ac3cf1c3fefa3a5de61703a046.jpg",
  },
];

const versionActual = "1.3"; // IMPORTANTE......Cambiar este valor cada vez que actualice los productos o imagenes

if (localStorage.getItem("versionProductos") !== versionActual) {
  localStorage.setItem("productos", JSON.stringify(productos));
  localStorage.setItem("versionProductos", versionActual);
}

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

  // AQUI Mostramos los detalles del producto seleccionado
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

  // Aqui filtra los productos
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

  //Aqui limpia filtros y recargar productos
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

  // Completar compra (redirigir a la tercera vista)
  document.getElementById("completar-compra").addEventListener("click", () => {
    window.location.href = "carrito.html"; // Redirige a una página de carrito (asegúrate de crear esta página)
  });

  // Cancelar compra y vuelve a la primera vista
  document.getElementById("cancelar-compra").addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
