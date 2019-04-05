import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import routes from "./routes";

dotenv.config();

const app = express();

app.use(
    morgan("combined"),
    cors(),
    express.urlencoded({ extended: true }),
    express.json(),
);
//Todos add a logMessage method to tweak your logger.
app.use("/", routes);

export default app;
