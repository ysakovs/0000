const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user)
{
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    register: async (req, res) =>
    {
        try
        {
            //use joi for validation
            const { email, password } = req.body;
            const foundUser = await User.findOne({ where: { email } });

            if (foundUser)
            {
                res.status(403).send({ error: "email name already taken" });
                return;
            }

            const hashedPassword = bcrypt.hashSync(password, 3);
            await User.create({ email, password: hashedPassword });

            res.send({ message: "user successfully created" });
        } catch (error)
        {
            console.log(error);

            res.status(500).send({ error: 'Could not access the database.' });
        }
    },
    login: async (req, res) =>
    {
        try
        {
            const { email, password } = req.body;

            //can we find user with the same email?
            const user = await User.findOne({
                where:
                {
                    email
                }
            });

            //if not in valid email
            if (!user)
            {
                return res.status(403).send({
                    error: "Invalid email"
                })
            }

            //is password valid?
            const validPassword = bcrypt.compareSync(password, user.password);

            if (!validPassword)
            {
                console.log("Password invalid");
                return res.status(403).send({ error: "Invalid password" });
            }

            console.log("Successfully logged in :) " + user);
            const jsonUser = user.toJSON();
            res.send({ jsonUser, token: jwtSignUser(jsonUser) });
        }
        catch (error)
        {
            //should never reach this position
            console.log(error);
            res.status(500).send({ error: 'Server error, try again later!' });
        }
    }
}