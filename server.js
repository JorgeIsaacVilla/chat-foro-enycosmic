const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir los archivos estáticos de la carpeta "public"
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Ruta de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado.');

    // Escuchar mensajes del cliente
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado.');
    });

    // Enviar un evento al cliente cuando el servidor esté listo
    socket.emit('server ready', `Servidor inicializado correctamente en el puerto ${PORT}`);
});

const PORT = process.env.PORT || 3000; // Definir solo el número del puerto
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}/`);
});
