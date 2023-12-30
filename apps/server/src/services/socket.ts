import { Server } from "socket.io";

class SocketService {
    private _io: Server;

    constructor() {
        console.log('Init Socker Service');
        this._io = new Server({
            cors: {
                allowedHeaders: ["*"],
                origin: "*",
            }
        });
    }

    public initListener() {
        const io = this._io;
        console.log('Init Socket listeners');
        
        io.on('connect', (socket) => {
            console.log(`New socket connected`, socket.id);
            socket.on('event:message', async ({message}: {message: string}) => {
                console.log('new message rec..', message);
            });
        });
    }

    get io() {
        return this._io
    }
}

export default SocketService;