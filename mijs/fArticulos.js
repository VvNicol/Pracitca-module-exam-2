const listaArticulos = [
    'raton', 'teclado', 'pantalla', 'alfombrilla', 'torreCPU', 'procesador', 'tarjetaGrafica'
];
const listaCliente = [ 
    {nombre : "maria", edad : 22},
    {nombre : "Antonio", edad : 42},
    {nombre : "jose", edad : 52}
];

const categoriasArticulos = [
    'Electrónica',
    'Accesorios de Computadora',
    'Muebles de Oficina',
    'Periféricos',
    'Componentes de Hardware',
    'Software',
    'Gaming'
];

const tablaDescuentos = [
    { articulo: 'Raton', descuento: 10, precioOriginal: 25 },
    { articulo: 'Teclado', descuento: 15, precioOriginal: 45 },
    { articulo: 'Pantalla', descuento: 20, precioOriginal: 150 },
    { articulo: 'Alfombrilla', descuento: 5, precioOriginal: 10 },
    { articulo: 'Torre CPU', descuento: 25, precioOriginal: 300 },
    { articulo: 'Procesador', descuento: 30, precioOriginal: 250 },
    { articulo: 'Tarjeta Gráfica', descuento: 15, precioOriginal: 400 }
];

export function crearTablaDescuento() {
    // Crear la tabla y agregar clases de estilo
    const table = document.createElement('table');
    table.classList.add('table');

    // Crear y agregar el encabezado de la tabla
    const thead = document.createElement('thead');
    let encabezado = `
        <tr>
            <th scope="col">Artículo</th>
            <th scope="col">Descuento (%)</th>
            <th scope="col">Precio Original (€)</th>
        </tr>
    `;
    thead.innerHTML = encabezado;
    table.appendChild(thead);

    // Crear el cuerpo de la tabla
    const tbody = document.createElement('tbody');

    // Recorrer la tabla de descuentos para crear las filas
    tablaDescuentos.forEach(t => {
        const tr = document.createElement('tr');

        // Crear una celda para cada propiedad
        const tdArticulo = document.createElement('td');
        tdArticulo.textContent = t.articulo;

        const tdDescuento = document.createElement('td');
        tdDescuento.textContent = `${t.descuento}%`;

        const tdPrecio = document.createElement('td');
        tdPrecio.textContent = `${t.precioOriginal}€`;

        // Agregar las celdas a la fila
        tr.appendChild(tdArticulo);
        tr.appendChild(tdDescuento);
        tr.appendChild(tdPrecio);

        // Agregar la fila al tbody
        tbody.appendChild(tr);
    });

    // Agregar el cuerpo de la tabla a la tabla completa
    table.appendChild(tbody);

    // Devolver la tabla completa
    return table;
}


export function listaHTML() {
    // Creamos una lista de artículos
    const ul = document.createElement('ul');
    ul.classList.add('list-group');
    // Por cada artículo un li
    listaArticulos.map( articulo => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        const text = document.createTextNode(articulo);
        li.appendChild(text);
        ul.appendChild(li);
    } )

    return ul;
}
export function listaClientes(){

    const ul = document.createElement('ul');
    ul.classList.add('list-group');
    listaCliente.forEach(c => {
        // Crear un li por cada cliente
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${c.nombre}`;
        
        // Añadir el li a la ul
        ul.appendChild(li);
    });

    return ul;
}

export function categoriasLista() {

    const ul = document.createElement('ul');
    ul.className = 'list-group';

    // Recorrer la lista de categorías
    categoriasArticulos.forEach(categoria => {
        // Crear un li por cada categoría
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = categoria;  // Agregar el texto de la categoría
        
        // Añadir el li a la ul
        ul.appendChild(li);
    });

    return ul; 
}

