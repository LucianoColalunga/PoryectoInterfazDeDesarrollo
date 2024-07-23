document.addEventListener('DOMContentLoaded', () => {
    const carritoFrutas = JSON.parse(localStorage.getItem('carritoFrutas')) || [];
    const tableBody = document.querySelector('tbody');

    function armarFilaHTML(producto) {
        return `<tr>
            <td>${producto.imagen}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><button class="button-remove" data-id="${producto.id}">Quitar</button></td>
        </tr>`;
    }

    if (carritoFrutas.length > 0) {
        carritoFrutas.forEach((producto) => {
            tableBody.innerHTML += armarFilaHTML(producto);
        });
    }
});
