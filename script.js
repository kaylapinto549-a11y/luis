const numeroWhatsApp = "573505262416";

const productos = [
    // PIZZAS
    {
        id: 1,
        nombre: "Pizza Margarita",
        categoria: "Pizzas",
        descripcion: "Salsa de tomate, mozzarella, albahaca y un toque de aceite de oliva.",
        precio: 25000,
        imagen: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 2,
        nombre: "Pizza Pepperoni",
        categoria: "Pizzas",
        descripcion: "Deliciosa combinación de queso mozzarella, salsa y pepperoni.",
        precio: 32000,
        imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 3,
        nombre: "Pizza Hawaiana",
        categoria: "Pizzas",
        descripcion: "Jamón, piña, queso fundido y salsa de tomate.",
        precio: 30000,
        imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 4,
        nombre: "Pizza Cuatro Quesos",
        categoria: "Pizzas",
        descripcion: "Una mezcla cremosa de quesos con una base de salsa especial.",
        precio: 35000,
        imagen: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 5,
        nombre: "Pizza Napolitana",
        categoria: "Pizzas",
        descripcion: "Tomate, mozzarella, orégano y sabores inspirados en Italia.",
        precio: 33000,
        imagen: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        nombre: "Pizza Especial de la Casa",
        categoria: "Pizzas",
        descripcion: "Una combinación especial de carnes, queso y vegetales.",
        precio: 39000,
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80"
    },

    // ENTRADAS
   
    {
        id: 8,
        nombre: "Palitos de Queso",
        categoria: "Entradas",
        descripcion: "Palitos crujientes por fuera y rellenos de queso.",
        precio: 14000,
        imagen: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 9,
        nombre: "Bruschettas",
        categoria: "Entradas",
        descripcion: "Pan tostado con tomate, hierbas y aceite de oliva.",
        precio: 12000,
        imagen: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=700&q=80"
    },

    // BEBIDAS
    
    {
        id: 11,
        nombre: "Jugo Natural",
        categoria: "Bebidas",
        descripcion: "Jugo de fruta preparado al momento. Consulta los sabores disponibles.",
        precio: 8000,
        imagen: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 12,
        nombre: "Gaseosa",
        categoria: "Bebidas",
        descripcion: "Bebida gaseosa fría para acompañar tu comida.",
        precio: 5000,
        imagen: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=700&q=80"
    },

    // POSTRES
    {
        id: 13,
        nombre: "Tiramisú",
        categoria: "Postres",
        descripcion: "Postre de inspiración italiana con café y crema suave.",
        precio: 12000,
        imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 14,
        nombre: "Cheesecake",
        categoria: "Postres",
        descripcion: "Tarta cremosa de queso con una deliciosa base crujiente.",
        precio: 11000,
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 15,
        nombre: "Brownie de Chocolate",
        categoria: "Postres",
        descripcion: "Un dulce de chocolate ideal para terminar tu comida.",
        precio: 9000,
        imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
    }
];

const contenedorProductos = document.getElementById("productos");
const botonesFiltro = document.querySelectorAll(".filtro");

function formatoPrecio(precio) {
    return precio.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}

function crearTarjeta(producto) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "producto";

    const imagenContenedor = document.createElement("div");
    imagenContenedor.className = "producto-imagen";

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    imagen.loading = "lazy";

    imagen.onerror = function () {
        this.onerror = null;
        this.src = "https://placehold.co/600x400/fff1df/8f3527?text=Bella+Napoli";
    };

    imagenContenedor.appendChild(imagen);

    const contenido = document.createElement("div");
    contenido.className = "producto-contenido";

    const categoria = document.createElement("span");
    categoria.className = "producto-categoria";
    categoria.textContent = producto.categoria;

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const pie = document.createElement("div");
    pie.className = "producto-pie";

    const precio = document.createElement("span");
    precio.className = "producto-precio";
    precio.textContent = formatoPrecio(producto.precio);

    const boton = document.createElement("button");
    boton.className = "boton-producto";
    boton.type = "button";
    boton.textContent = "Pedir por WhatsApp ↗";

    boton.addEventListener("click", function () {
        pedirProducto(producto);
    });

    pie.append(precio, boton);
    contenido.append(categoria, nombre, descripcion, pie);
    tarjeta.append(imagenContenedor, contenido);

    return tarjeta;
}

function mostrarProductos(categoriaSeleccionada = "Todas") {
    contenedorProductos.replaceChildren();

    const lista = categoriaSeleccionada === "Todas"
        ? productos
        : productos.filter(
            producto => producto.categoria === categoriaSeleccionada
        );

    lista.forEach(producto => {
        contenedorProductos.appendChild(crearTarjeta(producto));
    });

    if (lista.length === 0) {
        contenedorProductos.textContent = "No hay productos disponibles en esta categoría.";
    }
}

function pedirProducto(producto) {
    const mensaje =
        `Hola Bella Napoli 🍕\n` +
        `Quiero pedir:\n` +
        `Producto: ${producto.nombre}\n` +
        `Precio publicado: ${formatoPrecio(producto.precio)}\n\n` +
        `¿Me confirman la disponibilidad y cómo puedo realizar el pedido?`;

    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, "_blank", "noopener,noreferrer");
}

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", function () {
        botonesFiltro.forEach(item => item.classList.remove("activo"));
        this.classList.add("activo");

        mostrarProductos(this.dataset.categoria);
    });
});

// Menú adaptable para teléfonos celulares
const menuToggle = document.getElementById("menuToggle");
const navegacion = document.getElementById("navegacion");

menuToggle.addEventListener("click", function () {
    const abierto = navegacion.classList.toggle("abierto");
    menuToggle.setAttribute("aria-expanded", String(abierto));
    menuToggle.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );
    menuToggle.textContent = abierto ? "✕" : "☰";
});

navegacion.querySelectorAll("a").forEach(enlace => {
    enlace.addEventListener("click", function () {
        navegacion.classList.remove("abierto");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        menuToggle.textContent = "☰";
    });
});

// Año automático en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// Mostrar todos los productos al cargar la página
mostrarProductos();