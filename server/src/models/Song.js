module.exports = (sequalize, DataTypes) =>
{
    return sequalize.define('Song',
        {
            title: DataTypes.STRING,
            artist: DataTypes.STRING,
            genre: DataTypes.STRING,
            album: DataTypes.STRING,
            albumImageUrl: DataTypes.STRING,
            youtubeId: DataTypes.STRING,
            lyrics: DataTypes.TEXT,
            tab: DataTypes.TEXT
        })
}