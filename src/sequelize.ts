import { Sequelize } from 'sequelize-typescript'
import config from './config'

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

// sequelize.addModels([*model1, *model2)

export { sequelize }