document.getElementById('addButton').addEventListener('click', function() {
   
    const itemText = document.getElementById('itemInput').value;

    
    if (itemText.trim() !== '') {
        // Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = itemText;

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('btn', 'deleteButton');
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        
        li.appendChild(deleteButton);

        
        document.getElementById('itemList').appendChild(li);

        
        document.getElementById('itemInput').value = '';
    } else {
        alert('Por favor, ingresa un texto para el nuevo ítem.');
    }
});


document.querySelectorAll('.deleteButton').forEach(button => {
    button.addEventListener('click', function() {
        button.parentElement.remove();
    });
});
