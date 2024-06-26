const container = document.querySelector('div.container');

const retornarCardHtml = (producto) => {
    return `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`;
};

function activarClickEnCarrito() {
    const botonesCarrito = document.querySelectorAll('button.button.button-outline.button-add');
    if (botonesCarrito !== null) {
        for (let boton of botonesCarrito) {
            boton.addEventListener("click", (e) => {
                agregarACarrito(e.target.id);
            });
        }
    }
}

const cargarProductos = (array) => {
    if (array.length > 0) {
        array.forEach(producto => {
            container.innerHTML += retornarCardHtml(producto);
        });
    }
    activarClickEnCarrito();
};

cargarProductos(productos);