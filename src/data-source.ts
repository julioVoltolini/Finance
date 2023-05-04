import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuarios } from "./entity/Usuarios"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "ViaERP",
    password: "Via7216",
    database: "postgres",
    synchronize: false,
    logging: true,
    entities: [Usuarios],
    migrations: [],
    subscribers: [],
})
