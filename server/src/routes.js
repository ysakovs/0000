const authentication = require('./controllers/Authentication');
const authenticationPolicy = require('./controllers/AuthenticationPolicy');

module.exports = (app) =>
{
    app.post("/register", authenticationPolicy.validate, authentication.register);

    app.post("/login", authentication.login);
}


