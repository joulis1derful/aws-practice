import { Sequelize } from 'sequelize-typescript'
import config from './config'
import { Category } from "./model/Category";
import { Item } from "./model/Item";

const sequelize = new Sequelize({
  database: config('POSTGRES_DATABASE'),
  username: config('POSTGRES_USER'),
  password: config('POSTGRES_PASSWORD'),
  host: config('POSTGRES_HOST'),
  port: config('POSTGRES_PORT'),
  dialect: 'postgres',
  pool: {
    max: config('POSTGRES_MAX_CONNECTIONS'),
    min: 1,
    idle: 30000
  },
    // logging: config('SEQUELIZE_LOG') === true ? logger.debug.bind(logger) : false,
})

sequelize.addModels([Item, Category])

export { sequelize }
