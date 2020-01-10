const express = require("express");
const stupidCors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");
const { sequelize } = require('./models'); //index is automatically found
const routes = require('./routes')

const app = express();

app.use(stupidCors());
app.use(morgan('tiny'));
app.use(express.json());

routes(app);

sequelize.sync({ force: false }) //change to true to drop database
    .then(() =>
    {
        app.listen(config.PORT, () =>
        {
            console.log("Listening on port: " + config.PORT);
        })
    });