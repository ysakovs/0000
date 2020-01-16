import Api from './Api'

export default
    {
        async register(credentials)
        {
            var result = await Api().post('register', credentials);
            return result;
        },
        async login(credentials)
        {
            var result = await Api().post('login', credentials);
            return result;
        }
    }