module.exports = (sequalize, Datatypes) =>
{
    sequalize.define('User',
        {
            email: {
                type: Datatypes.STRING,
                unique: true
            },
            password: Datatypes.STRING
        })
}