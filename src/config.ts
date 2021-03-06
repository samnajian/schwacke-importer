import {join} from "path";

const appConfig = {
    dataFolder: join(__dirname, "../data"),
    database: {
        credentials: {
            user: "foo",
            password: "bar",
            database: "main",
            host: "0.0.0.0"
        }
    },
    batchSize: 10 // size of batch of records to be inserted to db
};

export {appConfig};