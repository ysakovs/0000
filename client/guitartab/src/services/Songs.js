import Api from './Api'

export default
    {
        async index(limit)
        {
            const response = await Api().get('songs', {
                params: {
                    limit
                }
            });
            return response.data;
        },
        async create(song)
        {
            const response = await Api().post('songs/create', song);
            return response.data;
        }
    }