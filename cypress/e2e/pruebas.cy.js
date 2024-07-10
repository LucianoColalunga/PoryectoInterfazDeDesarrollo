/// <reference types="cypress" />

describe('Pruebas de Ecommerce', () => {
    const productos = [
        {
            id: 1,
            imagen: "🍌",
            nombre: "Bananas",
            precio: 220
        },
        {
            id: 2,
            imagen: "🍎",
            nombre: "Manzanas",
            precio: 200
        },
        {
            id: 3,
            imagen: "🥝",
            nombre: "Kiwis",
            precio: 280
        }
    ];

    beforeEach(() => {
        
        cy.clearLocalStorage();
        
        cy.visit('index.html');
    });

    it('debería cargar los productos correctamente', () => {
        productos.forEach(producto => {
            cy.get('.container').should('contain', producto.nombre);
        });
    });

    it('debería agregar productos al carrito', () => {
        
        cy.get('button.button-add').first().click();
        cy.get('button.button-add').eq(1).click();

        
        cy.window().then((win) => {
            const carrito = JSON.parse(win.localStorage.getItem('carritoFrutas'));
            expect(carrito).to.have.length(2);
            expect(carrito[0]).to.deep.equal(productos[0]);
            expect(carrito[1]).to.deep.equal(productos[1]);
        });
    });

    it('debería almacenar el carrito en localStorage', () => {
       
        cy.get('button.button-add').first().click();

        
        cy.window().then((win) => {
            const carrito = JSON.parse(win.localStorage.getItem('carritoFrutas'));
            expect(carrito).to.have.length(1);
            expect(carrito[0]).to.deep.equal(productos[0]);
        });
    });

    it('debería recuperar el carrito desde el localStorage', () => {
        
        cy.get('button.button-add').first().click();

        
        cy.reload();

        
        cy.window().then((win) => {
            const carrito = JSON.parse(win.localStorage.getItem('carritoFrutas'));
            expect(carrito).to.have.length(1);
            expect(carrito[0]).to.deep.equal(productos[0]);
        });
    });
});
