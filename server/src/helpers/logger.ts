import winston from "winston";

const level = process.env.LOG_LEVEL || "debug";

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level,
        }),
    ],
});

export default logger;
