let amigos = [];

function agregarAmigo () {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo !== "") { // Verifica que el campo no esté vacío
        amigos.push(nombreAmigo); // Añade el nombre a la lista de amigos
        mostrarAmigos();
        document.getElementById('amigo').value = ""; // Limpia el campo de texto
    } else {
        alert("Por favor, ingresa un nombre."); //En caso de que no haya nombre
    }
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpia la lista antes de mostrarla de nuevo
  
    // Agrega cada amigo a la lista en el HTML
    amigos.forEach(amigo => {
      const ul = document.createElement('ul');
      ul.textContent = amigo;
      lista.appendChild(ul);
    });
  }

function sortearAmigo() {
    if (amigos.length > 0) {
        // Selecciona índice aleatorio entre 0 y la longitud de la lista de amigos
        const amigoSecreto = Math.floor(Math.random() * amigos.length);

        // Obtiene el nombre del amigo aleatorio
        const amigoAleatorio = amigos[amigoSecreto];

        // Muestra el nombre del amigo aleatorio
        alert(`Tu amigo secreto es: ${amigoAleatorio}`);
    } else {
        alert("No hay amigos en la lista para seleccionar.");
    }
}

function reiniciarJuego() {
    // Vacía el array de amigos
    amigos = [];
  
    // Limpia la lista en el HTML
    mostrarAmigos();
  
    // Limpiar el campo de texto si lo deseas
    document.getElementById('nombreAmigo').value = '';
  
  }
