import Api from './Api'

export default
    {
        async index()
        {
            const response = await Api().get('songs');
            return response.data;
        },
        async create(song)
        {
            const response = await Api().post('songs/create', song);
            return response.data;
        }
    }