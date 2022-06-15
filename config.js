require('dotenv').config()

module.exports = {
    port: process.env.PORT || 3000,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_database: process.env.DB_DATABASE,
    db_host: process.env.DB_HOST,
    db_dialect: process.env.DB_DIALECT,
};