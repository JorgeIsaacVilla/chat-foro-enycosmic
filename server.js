// Importar las dependencias
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir los archivos estáticos de la carpeta "public"
app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado.');

    // Escuchar mensajes del cliente
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado.');
    });
});

//const PORT = process.env.PORT || 3000;
const PORT = 'chat-foro-enycosmic.vercel.app'
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
