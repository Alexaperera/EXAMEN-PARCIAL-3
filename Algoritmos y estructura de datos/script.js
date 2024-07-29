/**
 * Ordena un arreglo de objetos por una propiedad especificada.
 * @param {Object[]} arr - El arreglo de objetos a ordenar.
 * @param {string} prop - El nombre de la propiedad por la que se debe ordenar.
 * @return {Object[]} - Un nuevo arreglo con los objetos ordenados por la propiedad especificada.
 */
function ordenarPorPropiedad(arr, prop) {
    return arr.slice().sort((a, b) => {
        if (a[prop] < b[prop]) {
            return -1;
        } else if (a[prop] > b[prop]) {
            return 1;
        } else {
            return 0;
        }
    });
}


const personas = [
    { nombre: 'alexa perera', edad: 30 },
    { nombre: 'Elias briceño', edad: 25 },
    { nombre: 'eliseo perez', edad: 35 }
];

// Función para actualizar la lista en el DOM
function actualizarLista(personas) {
    const list = document.getElementById('personList');
    list.innerHTML = '';
    personas.forEach(persona => {
        const li = document.createElement('li');
        li.textContent = `${persona.nombre} - ${persona.edad} años`;
        list.appendChild(li);
    });
}


actualizarLista(personas);


document.getElementById('sortByName').addEventListener('click', () => {
    const ordenadoPorNombre = ordenarPorPropiedad(personas, 'nombre');
    actualizarLista(ordenadoPorNombre);
});

document.getElementById('sortByAge').addEventListener('click', () => {
    const ordenadoPorEdad = ordenarPorPropiedad(personas, 'edad');
    actualizarLista(ordenadoPorEdad);
});

document.getElementById('addButton').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value;
    const ageInput = document.getElementById('ageInput').value;

    if (nameInput.trim() !== '' && ageInput.trim() !== '') {
        const newPerson = { nombre: nameInput, edad: parseInt(ageInput) };
        personas.push(newPerson);
        actualizarLista(personas);
        
        
        document.getElementById('nameInput').value = '';
        document.getElementById('ageInput').value = '';
    } else {
        alert('Por favor, ingresa un nombre y una edad válidos.');
    }
});
