Desarrollo back-end de CRUD con express-node js y mysql, sistema básico de usuarios.

Para correr este proyecto se debe tener instalado el cliente de Mysql con una base de datos llamada "ejemplo", el acceso al usuario root esta por defecto sin password con host localhost: ver archivo config.js en la raíz.

    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        passuord: process.env.MYSQL_PASSMORD || '',
        database: process.env.MYSQL_DB || 'ejemplo'
    }

Se sube archivo "Insomnia_2024-03-09" de insmonia para acceder a la colección de consultas.


