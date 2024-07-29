
const numeros = [];


function agregarNumero() {
    const numero = parseInt(document.getElementById('numero').value, 10);

    if (!isNaN(numero)) {
        numeros.push(numero);
        document.getElementById('numero').value = '';
        alert('Número agregado.');
    } else {
        alert('Por favor ingresa un número válido.');
    }
}


function mostrarCuadradosMayoresDe20() {
    const listaResultados = document.getElementById('listaResultados');
    listaResultados.innerHTML = ''; // Limpiar lista actual

    const cuadradosMayoresDe20 = transformarYFiltrar(numeros);
    
    cuadradosMayoresDe20.forEach(cuadrado => {
        const li = document.createElement('li');
        li.textContent = `${cuadrado}`;
        listaResultados.appendChild(li);
    });
}

/**
 * Transforma un arreglo de números a sus cuadrados y filtra aquellos que sean mayores de 20.
 * @param {Array<number>} numeros - Un arreglo de números.
 * @returns {Array<number>} Un nuevo arreglo con los cuadrados mayores de 20.
 */
function transformarYFiltrar(numeros) {
    return numeros
        .map(num => num * num)    
        .filter(cuadrado => cuadrado > 20); 
}
