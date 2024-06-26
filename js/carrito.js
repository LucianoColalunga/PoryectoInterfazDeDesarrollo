const carrito = [];

function agregarACarrito(id) {
    const producto = productos.find(p => p.id == id);
    if (producto) {
        carrito.push(producto);
        console.log(carrito); 
    }
}







