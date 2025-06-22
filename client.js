const net = require('net');
const readline = require('readline');

const HOST = 'localhost';
const PORT = 5000;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    rl.question('Digite sua mensagem: ', (message) => {
        client.write(message);
    });
});

client.on('data', (data) => {
    console.log(`Mensagem do servidor: ${data.toString()}`);
    client.end();
});

client.on('close', () => {
    rl.close();
});