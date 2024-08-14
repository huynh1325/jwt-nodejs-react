import express from "express"
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web"
import initApiRoutes from "./routes/api"
import configCors from "./config/cors"
require("dotenv").config();
import bodyParser from "body-parser";
// import connection from "./config/connectDB";
import { createJWT, verifyToken } from "./middleware/JWTAction"

const app = express();
const PORT = process.env.PORT || 8080

configCors(app)

//config view engine
configViewEngine(app)

//config body-parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// testconnect
// connection();

// test JWT
createJWT();
let decodedData = verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaHV5bmgiLCJhZGRyZXNzIjoiZGFuYW5nIiwiaWF0IjoxNzIzNjEzNjg1fQ.VsCxEOE6tKS_Tu4xcLfu4faXwQ-uL8EhCsA4CgmZpyQ");
console.log(decodedData);

//init web routes
initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
    console.log("JWT Backend is running on the port = " + PORT)
})