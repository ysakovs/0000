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

if (process.env.NODE_DEV === 'production')
{
    app.use(express.static(__dirname + '/public/'));
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

sequelize.sync({ force: false }) //change to true to drop database
    .then(() =>
    {
        app.listen(config.PORT, () =>
        {
            console.log("Listening on port: " + config.PORT);
        })
    });