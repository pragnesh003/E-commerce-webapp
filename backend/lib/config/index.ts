"use strict";

// Import File
import { expressConfig } from "./expressConfig";
import { dbConfig } from "./dbConfig";

// Env Configuration
var cfg = {
    TAG: process.env.nodeEnv,
    mongo: {
        dbName: process.env.dbName,
        dbUrl: process.env.dbUrl,
        dbReadUrl: process.env.dbReadUrl,
        options: { useNewUrlParser: true, useUnifiedTopology: true },
    },
};

//Export config module
export default {
    cfg,
    expressConfig,
    dbConfig
}
