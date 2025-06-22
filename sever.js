const net = require('net');

const HOST = 'localhost';
const PORT = 5000;

const server = net.createServer((socket) => {
    console.log('Servidor TCP rodando...');
    console.log(`Cliente conectado: ${socket.remoteAddress}:${socket.remotePort}`);
    
    socket.on('data', (data) => {
        const message = data.toString();
        console.log(`Mensagem recebida: ${message}`);
        socket.write('ACK: Mensagem recebida com sucesso!');
    });

    socket.on('end', () => {
        console.log('Conexão com cliente encerrada');
    });

    socket.on('error', (err) => {
        console.error('Erro na conexão:', err);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Servidor ouvindo em ${HOST}:${PORT}`);
});

process.on('SIGINT', () => {
    console.log('\nEncerrando servidor...');
    server.close();
    process.exit();
});