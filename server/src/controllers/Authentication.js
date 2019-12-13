const { User } = require('../models');
const bcrypt = require('bcryptjs');

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

            const hashedPassword = bcrypt.hashSync(password);
            await User.create({ email, hashedPassword });

            res.send({ message: "user successfully created" });
        } catch (error)
        {
            console.log(error);

            res.status(400).send({ error: 'This email account is already in use.' });
        }
    },
    login: async (req, res) =>
    {
        try
        {
            const { email, password } = req.body;
            const user = await User.findOne({
                where:
                {
                    email
                }
            });

            if (!user)
            {
                return res.status(403).send({
                    error: "Invalid email"
                })
            }

            const validPassword = password === user.password;

            if (!validPassword)
            {
                return res.status(403).send({ error: "Invalid password" });
            }

            res.send(user.toJSON());
        }
        catch (error)
        {
            console.log(error);

            res.status(500).send({ error: 'Server error, try again later!' });
        }
    }
}