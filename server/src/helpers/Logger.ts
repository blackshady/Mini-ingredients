import winston from 'winston';
import { appConstant } from '../appConst';
const {LoggerLevel: level} = appConstant;


class Logger {
    public logger: winston.Logger;
    private readonly loggerLevel:string;

    constructor(level: string){
        this.loggerLevel = level;
        this.init();
    }

    private init(){
        this.logger = winston.createLogger({transports: [new winston.transports.Console({level:this.loggerLevel})]})
    }

}

export default new Logger(level).logger;
