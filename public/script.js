        // Conectar con el servidor
        const socket = io();

        // Referencias a los elementos del DOM
        const form = document.getElementById('form');
        const input = document.getElementById('input');
        const messages = document.getElementById('messages');

        // Función para agregar un mensaje a la lista
        const addMessage = (msg) => {
            const li = document.createElement('li');
            li.textContent = msg;
            messages.appendChild(li);
        };

        // Manejar el envío de mensajes
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = input.value;
            if (msg) {
                // Enviar el mensaje al servidor
                socket.emit('chat message', msg);
                // Limpiar el campo de entrada
                input.value = '';
            }
        });

        // Escuchar mensajes del servidor
        socket.on('chat message', (msg) => {
            // Agregar el mensaje a la lista de mensajes
            addMessage(msg);
        });

        // Escuchar cuando el servidor esté listo
        socket.on('server ready', (msg) => {
            console.log(msg);
            addMessage(msg);  // Mostrar el mensaje en el frontend
        });