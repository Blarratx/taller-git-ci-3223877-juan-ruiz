// Función para sumar dos números (para pruebas)
function sumar(a, b) {
    return a + b;
}

// Función para agregar elementos a la lista
function agregarItem(texto) {
    const lista = document.getElementById('lista');
    if (lista && texto.trim() !== '') {
        const item = document.createElement('li');
        item.textContent = texto;
        item.className = 'lista-item';
        lista.appendChild(item);
    }
}

// Función para limpiar la lista
function limpiarLista() {
    const lista = document.getElementById('lista');
    if (lista) {
        lista.innerHTML = '';
    }
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('App lista - Taller Git SENA');
    
    // Configurar botón Agregar
    const botonAgregar = document.getElementById('agregarBtn');
    if (botonAgregar) {
        botonAgregar.addEventListener('click', function() {
            const numero = document.querySelectorAll('#lista li').length + 1;
            const texto = `Elemento ${numero} - ${new Date().toLocaleTimeString()}`;
            agregarItem(texto);
        });
    }
    
    // Configurar botón Limpiar
    const botonLimpiar = document.getElementById('limpiarBtn');
    if (botonLimpiar) {
        botonLimpiar.addEventListener('click', limpiarLista);
    }
    
    // Agregar elementos iniciales
    agregarItem('Bienvenido al Taller de Git');
    agregarItem('Ficha: 3223877');
    agregarItem('Haz clic en "Agregar" para añadir más elementos');
});

// Exportar funciones para testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sumar, agregarItem, limpiarLista };
}
// Función agregarItem confirmada
