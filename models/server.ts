import express, { Application } from 'express';
import useRouter from '../routes/usuarios';
class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        //Definir rutas
        this.routes();
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, useRouter);
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto:' + this.port);
        });
    }

}

export default Server;