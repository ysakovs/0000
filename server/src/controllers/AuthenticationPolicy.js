const Joi = require('joi');

function GetErrorMessage(key)
{
    switch (key)
    {
        case 'email':
            return "email must be valid";
        case 'password':
            return "Invalid Password";
        default:
            return "Unkown error";
    }
}

module.exports = {
    validate: (req, res, next) =>
    {
        const schema =
        {
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp('^[A-z0-9]{8,32}$'))
        };
        const { error, value } = Joi.validate(req.body, schema);

        if (!error)
            next();
        else
        {
            console.log(error);
            const key = error.details[0].context.key;
            const result = { key };
            result.error = GetErrorMessage(key);
            res.status(400).send(result);
        }
    }
}