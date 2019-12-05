module.exports = (sequalize, Datatypes) =>
{
    return sequalize.define('User',
        {
            email: {
                type: Datatypes.STRING,
                unique: true
            },
            password: Datatypes.STRING
        })
}