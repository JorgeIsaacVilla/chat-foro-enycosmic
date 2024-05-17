const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const frontendURL = 'https://chat-foro-enycosmic.vercel.app';
const localURL = 'http://localhost:3000';

app.use(cors({
    origin: [frontendURL, localURL],
    credentials: true // Habilitar el intercambio de cookies a través de solicitudes CORS
}));
app.use(express.json());

// Servir los archivos estáticos de la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
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
