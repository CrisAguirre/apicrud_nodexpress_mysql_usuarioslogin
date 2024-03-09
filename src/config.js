require('dotenv').config()

module.exports = {
app: {
    port: process.env.PORT,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        passuord: process.env.MYSQL_PASSMORD || '',
        database: process.env.MYSQL_DB || 'ejemplo'
    }
}