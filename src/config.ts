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
    }
};

export {appConfig};