const AdminUser = require('nestjs-admin').AdminUserEntity

module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "user",
    "password": "password",
    "database": "db",
    "entities": ["dist/**/*.entity{.ts,.js}",  AdminUser]//, "node_modules/nestjs-admin/**/*.entity.js"],
   , "synchronize": true
  }