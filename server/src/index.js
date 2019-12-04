const express = require("express");
const stupidCors = require("cors");
const morgan = require("morgan");
const config = require("./config/config");
const { sequelize } = require('./models')

const app = express();

app.use(stupidCors());
app.use(morgan('tiny'));
app.use(express.json());

app.post("/register", (req, res) =>
{
    res.send(req.body.message);
});

sequelize.sync({ force: false })
    .then(() =>
    {
        app.listen(config.PORT, () =>
        {
            console.log("Listening on port: " + config.PORT);
        })
    });