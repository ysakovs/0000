const { Song } = require('../models');

module.exports = {
    index: async (req, res) =>
    {
        try
        {
            let limit = req.query.limit;
            if (limit === undefined)
                limit = 10;

            console.log("The limit is: " + limit);

            const result = await Song.findAll({ limit });
            res.status(200).send(result);
        } catch (error)
        {
            console.log(error);
            res.status(500).send({ error: 'Could not access the database.' });
        }
    },
    create: async (req, res) =>
    {
        try
        {
            console.log(req.body);
            await Song.create(req.body);
            res.status(200);
        } catch (error)
        {
            console.log(error);
            res.status(500).send({ error: 'Could not access the database.' });
        }
    },
}