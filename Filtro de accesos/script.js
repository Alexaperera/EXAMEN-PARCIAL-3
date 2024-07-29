
const personas = [];


function agregarPersona() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value, 10);

    if (nombre && !isNaN(edad)) {
        personas.push({ nombre, edad });
        document.getElementById('nombre').value = '';
        document.getElementById('edad').value = '';
        alert('Persona agregada.');
    } else {
        alert('Por favor ingresa un nombre válido y una edad.');
    }
}


function mostrarMayoresDeEdad() {
    const listaPersonas = document.getElementById('listaPersonas');
    listaPersonas.innerHTML = ''; // Limpiar lista actual

    const mayoresDeEdad = filtrarMayoresDeEdad(personas);
    
    mayoresDeEdad.forEach(persona => {
        const li = document.createElement('li');
        li.textContent = `${persona.nombre} - ${persona.edad} años`;
        listaPersonas.appendChild(li);
    });
}

/**
 * Filtra un arreglo de personas para devolver solo aquellas que tienen 18 años o más.
 * @param {Array<Object>} personas - Un arreglo de objetos, cada uno con las propiedades `nombre` y `edad`.
 * @returns {Array<Object>} Un nuevo arreglo con solo las personas mayores de edad.
 */
function filtrarMayoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18);
}


  