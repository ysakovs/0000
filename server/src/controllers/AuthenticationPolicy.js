const Joi = require('joi');

module.exports = {
    validate: (req, res, next) =>
    {
        const schema =
        {
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp('^[A-z0-9]{8,32}$'))
        };
        const { error, value } = Joi.validate(req.body, schema);

        console.log(Joi.validate(req.body, schema).error.details);

        if (error)
        {
            res.status(400);
            switch (error.details[0].context.key)
            {
                case 'email':
                    res.send({ error: "email must be valid" });
                    break;
                case 'password':
                    res.send({ error: "Invalid Password" });
                    break;
                default:
                    res.send({ error: "Unkown error" });
            }
        }
        else
        {
            next();
        }
    }
}