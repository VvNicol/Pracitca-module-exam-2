import { listaHTML ,listaClientes , categoriasLista , crearTablaDescuento} from "./fArticulos.js"

function verLista() {
    const articulosContainer = document.getElementById('articulos');
    articulosContainer.innerHTML = '';  // Limpiamos el contenido previo
    const lista = listaHTML();  // Generamos la lista
    articulosContainer.appendChild(lista);  // La insertamos en el contenedor
}

function verListaCliente(){
    const clientesContainer = document.getElementById('clientes');
    clientesContainer.innerHTML = '';
    const lista = listaClientes(); 
    clientesContainer.appendChild(lista);
}

function verListaCategoria(){
    const articulosContainer = document.getElementById('articulos');
    articulosContainer.innerHTML = ''; 
    const listaC = categoriasLista(); 
    articulosContainer.appendChild(listaC);
}
function verTablaCategoria(){
    const articulosContainer = document.getElementById('articulos');
    articulosContainer.innerHTML = ''; 
    const tabla = crearTablaDescuento(); 
    articulosContainer.appendChild(tabla);
}

window.verLista = verLista;
window.verListaCliente = verListaCliente;
window.verListaCategoria = verListaCategoria;
window.verTablaCategoria = verTablaCategoria;