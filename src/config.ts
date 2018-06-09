import * as convict from 'convict'

// if (process.env.DOTENV) require('dotenv').config({ path: process.env.DOTENV })

const definitions: any = {
    AWS_ELASTICSEARCH_CONFIG: {
        env: 'AWS_ELASTICSEARCH_CONFIG',
        format: '*',
        default: null
    },
    AWS_ELASTICSEARCH_HOTEL_DOMAIN_URL: {
        env: "AWS_ELASTICSEARCH_HOTEL_DOMAIN_URL",
        format: "*",
        default: ""
    },
    LOG_LEVEL: {
        env: "LOG_LEVEL",
        format: '*',
        default: "info"
    },
    LOG_FILE: {
        env: "LOG_FILE",
        format: '*',
        default: ''
    },
    POSTGRES_HOST: {
        env: "POSTGRES_HOST",
        format: '*',
        default: 'localhost'
    },
    POSTGRES_PORT: {
        env: "POSTGRES_PORT",
        format: 'port',
        default: 5432
    },
    POSTGRES_USER: {
        env: "POSTGRES_USER",
        format: '*',
        default: 'prod'
    },
    POSTGRES_PASSWORD: {
        env: "POSTGRES_PASSWORD",
        format: '*',
        default: 'test'
    },
    POSTGRES_DATABASE: {
        env: "POSTGRES_DATABASE",
        format: '*',
        default: 'test'
    },
    POSTGRES_MAX_CONNECTIONS: {
        env: "POSTGRES_MAX_CONNECTIONS",
        format: 'int',
        default: 10
    },
    SEQUELIZE_LOG: {
        env: "SEQUELIZE_LOG",
        format: 'Boolean',
        default: false
    }
}

const schema = convict(definitions)

schema.validate({ allowed: 'strict' })

const config = (name: string): any => {
    if (schema.get(name) != null) return schema.get(name)
    throw Error(`environment variable ${definitions[name].env} is required`)
}

export default config