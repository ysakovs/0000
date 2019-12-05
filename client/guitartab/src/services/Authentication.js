import Api from './Api'

export default
    {
        async register(credentials)
        {
            var result = await Api().post('register', credentials);
            return result;
        }
    }