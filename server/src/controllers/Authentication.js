const { User } = require('../models');

module.exports = {
    register: async (req, res) =>
    {
        try
        {
            const user = await User.create(req.body);
            res.send(user.toJSON());

        } catch (error)
        {
            console.log(error);

            res.status(400).send({ error: 'This email account is already in use.' });
        }
    }
}