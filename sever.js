const net = require('net');

const HOST = 'localhost';
const PORT = 5000;

const server = net.createServer((socket) => {
    console.log('Servidor rodando');
    console.log(`Conexão aceita de ${socket.remoteAddress}:${socket.remotePort}`);
    
    socket.on('data', (data) => {
        const message = data.toString();
        console.log(`Mensagem recebida: ${message}`);
        socket.write('Mensagem recebida');
    });

    socket.on('end', () => {
        console.log('Conexão encerrada');
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor TCP ouvindo em ${HOST}:${PORT}`);
});