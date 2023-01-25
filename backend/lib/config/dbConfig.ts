"use strict";
// Import Packages
import mongoose from "mongoose";   // Connect db using mongoose
// plugin bluebird promise in mongoose
mongoose.Promise = require("bluebird"); // promise library
// Note: mongoose not provide promises in query

// Connect to Db
export async function dbConfig(env: any, callBack: any) {

    // Variable declare
    let dbName: any = env.mongo.dbName;
    let dbUrl: any = env.mongo.dbUrl;
    let dbReadUrl: any = env.mongo.dbReadUrl;
    let dbOptions: any = env.mongo.options;

    //  DB Configuration
    dbUrl = dbUrl + dbName;
    dbReadUrl = dbReadUrl + dbName;

    console.info("1. Configuring db in " + env.TAG + " mode");
    console.info("2. Connecting to Write: " + dbUrl);
    console.info("3. Connecting to Read: " + dbReadUrl);

    mongoose.Promise = global.Promise;
    let db: any = global;

    // Write connection 
    db['writeUserConnection'] = mongoose.createConnection(dbUrl, dbOptions);

    db['writeUserConnection'].on('error', function (error: any) {
        console.log(`MongoDB :: connection write ${dbName} ${JSON.stringify(error)}`);
        db['writeUserConnection'].close().catch(() => console.log(`MongoDB :: failed to close connection write`, dbName));
    });

    db['writeUserConnection'].on('connected', function () {
        console.log(`MongoDB :: connected write`, dbName);
    });

    db['writeUserConnection'].on('disconnected', function () {
        console.log(`MongoDB :: disconnected write`, dbName);
    });

    // Read Connection
    db['readUserConnection'] = mongoose.createConnection(dbReadUrl, dbOptions);

    db['readUserConnection'].on('error', function (error: any) {
        console.log(`MongoDB :: connection read ${dbName} ${JSON.stringify(error)}`);
        db['readUserConnection'].close().catch(() => console.log(`MongoDB :: failed to close connection read`, dbName));
    });

    db['readUserConnection'].on('connected', function () {
        console.log(`MongoDB :: connected read`, dbName);
    });

    db['readUserConnection'].on('disconnected', function () {
        console.log(`MongoDB :: disconnected read `, dbName);
    });

    callBack();
}