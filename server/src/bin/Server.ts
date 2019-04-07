import app from '../App';
import  { appConstant } from '../appConst';
import logger from '../helpers/Logger';

const {AppPort, AppHost} = appConstant;


class Server {

     private readonly server: any;
     private readonly PORT: number;
     private readonly HOST: string;

     constructor(app: any, port: number, host: string) {
         this.server = app;
         this.PORT = port;
         this.HOST = host;
         this.init();
     }

     /**
      * Server listen on a specific port
      */
     private init(): void {
         this.server.listen(this.PORT, () => logger.info(`Server is running: 🌎 ${this.HOST}:${this.PORT}`));
     }
 }

new Server(app, AppPort, AppHost);
