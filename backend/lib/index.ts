// Import Packages
import express from "express"; // Web framework
import dotenv from "dotenv/config"; // Load env file
import config from "./config";
import router from "./routes";

config.dbConfig(config.cfg, (err: any) => {
    if (err) { return; }

    // init express app
    // Mount the specified middleware function at the same path
    const app = express();

    // config express
    config.expressConfig(app);

    // Access public folder in app
    let dir = __dirname;
    dir = dir.replace("src", "public");
    app.use(express.static(dir));

    if (err) return dotenv;
    // attach the routes to the app
    router(app);

    // start server
    const server = app.listen(process.env.port, () => {
        console.log(`Express server listening on ${process.env.port}`);
    });
})