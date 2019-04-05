import app from "../app";
import logger from "../helpers/logger";

const port = process.env.PORT || 3000;
const server = app.listen( port, () => {
    logger.info(`server started at http://localhost:${ port }`);
});
