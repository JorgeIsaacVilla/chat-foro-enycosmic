// Importar las dependencias
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Crear una instancia de Express
const app = express();

// Crear un servidor HTTP y asociarlo a la instancia de Express
const server = http.createServer(app);

// Crear una instancia de Socket.io y asociarla al servidor HTTP
const io = new Server(server);

// Servir los archivos estáticos de la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


// Manejar conexiones de Socket.io
io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado.');

    // Escuchar mensajes del cliente
    socket.on('chat message', (msg) => {
        // Emitir el mensaje a todos los clientes conectados
        io.emit('chat message', msg);
    });

    // Manejar la desconexión de un usuario
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado.');
    });
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
