const config = require("../../config");
require('dotenv').config()

module.exports = {
    "development": {
        "username": config.db_username,
        "password": config.db_password,
        "database": config.db_database,
        "host": config.db_host,
        "dialect": config.db_dialect,
    },
}