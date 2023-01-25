"use strict";

// Import Packages
import bodyParser from "body-parser";  // Handel req.body parameters
import morgan from "morgan"; // Handel req res 
import cors from "cors"; // Enable CORS with various options

// --------------------------------- Module Export ----------------------------
export async function expressConfig(app: any) {
    app.use(cors());
    app.options("*", cors());

    // Returns middleware that only parses urlencoded bodies.
    // extended: The extended option allows to choose between parsing the URL-encoded data with the querystring.
    // limit: Controls the maximum req body size.
    app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));

    // Returns middleware that only parses json.
    // limit: Controls the maximum req body size.
    app.use(bodyParser.json({ limit: "50mb" }));


    // Concise output colored by response status for development use.
    app.use(morgan("dev"));

    app.use(function (req: any, res: any, next: any) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Credentials", true);
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept,authorization,accessToken," +
            "app_version,platform,ios_version,countryISO,Authorization"
        );
        res.setHeader(
            "Access-Control-Allow-Methods",
            "POST,GET,PUT,DELETE,OPTIONS"
        );
        next();
    });
}