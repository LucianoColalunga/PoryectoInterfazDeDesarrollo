const carritoFrutas = recuperarCarrito();

function agregarAlCarrito(frutaId) {
    if (frutaId > 0) {
        let productoEncontrado = productos.find((producto) => producto.id === parseInt(frutaId));
        if (productoEncontrado !== undefined) {
            carritoFrutas.push(productoEncontrado);
            almacenarCarrito();
        }
    }
}

function almacenarCarrito() {
    if (carritoFrutas.length > 0) {
        localStorage.setItem('carritoFrutas', JSON.stringify(carritoFrutas));
    }
}

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem('carritoFrutas')) || [];
}
