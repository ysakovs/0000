const fs = require('fs');
const Sequelize = require('sequelize');
const config = require('../config/config');
const path = require('path');
const db = {};

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

const models = fs.readdirSync(__dirname)
    .filter(x => !__filename.endsWith(x));

models.forEach(x =>
{
    db[x] = sequelize.import(path.join(__dirname, x));
    //CRAZY syntax (requirs return and { to be on same line)
    // return {
    //     name: x,
    //     launches: 
    // }
}
);

db.sequelize = sequelize;
module.exports = db;