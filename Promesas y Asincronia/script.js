async function obtenerUsuarios() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const usuarios = await response.json();
      return usuarios;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return [];
    }
  }
  
  async function buscarUsuario() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Cargando...';
  
    const usuarios = await obtenerUsuarios();
    const usuarioEncontrado = usuarios.find(usuario => usuario.name.toLowerCase().includes(searchInput));
  
    if (usuarioEncontrado) {
      resultDiv.innerHTML = `
        <h2>Usuario Encontrado:</h2>
        <p><strong>Nombre:</strong> ${usuarioEncontrado.name}</p>
        <p><strong>Correo Electrónico:</strong> ${usuarioEncontrado.email}</p>
        <p><strong>Teléfono:</strong> ${usuarioEncontrado.phone}</p>
        <p><strong>Empresa:</strong> ${usuarioEncontrado.company.name}</p>
      `;
    } else {
      resultDiv.innerHTML = 'Usuario no encontrado';
    }
  }
  
  // Opcional: Obtener y mostrar todos los usuarios al cargar la página
  window.onload = async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Cargando...';
  
    const usuarios = await obtenerUsuarios();
  
    if (usuarios.length > 0) {
      resultDiv.innerHTML = `
        <h2>Todos los Usuarios:</h2>
        <ul>
          ${usuarios.map(usuario => `<li>${usuario.name} - ${usuario.email}</li>`).join('')}
        </ul>
      `;
    } else {
      resultDiv.innerHTML = 'No se encontraron usuarios.';
    }
  };
  