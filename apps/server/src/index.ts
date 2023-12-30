import http from 'http';
import SocketService from './services/socket';

const init = async () => {
    const socketServive = new SocketService();

    const httpServer = http.createServer();
    const PORT = process.env.PORT ? process.env.PORT : 8000;

    socketServive.io.attach(httpServer);

    httpServer.listen(PORT, () => {
        console.log(`server is listening on ${PORT}`);
    });

    socketServive.initListener();
}

init();