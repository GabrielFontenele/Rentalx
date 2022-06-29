import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost", // for docker use "database" for local use "localhost" instead
  port: 5432,
  username: "docker",
  password: "1234",
  database: "rentalx",
  synchronize: false,
  logging: true,
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch(error => console.log(error));

export default AppDataSource;
