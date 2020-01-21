const authentication = require('./controllers/Authentication');
const songs = require('./controllers/Songs');
const authenticationPolicy = require('./controllers/AuthenticationPolicy');

module.exports = (app) =>
{
    app.post("/register", authenticationPolicy.validate, authentication.register);

    app.post("/login", authentication.login);

    app.get("/songs", songs.index);
    app.post("/songs/create", songs.create);
}


