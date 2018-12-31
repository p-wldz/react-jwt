import jwt_decode from 'jwt-decode';

const Auth = {
    SaveToken(token){
        localStorage.setItem('token', token);
    },
    IsLogged(){
        let token = localStorage.getItem('token');
        if (token == null)
        {
            return false;
        }
        return true;
    },
    GetToken()
    {
        return localStorage.getItem('token');
    },
    GetUserData()
    {
        let decoded = jwt_decode(Auth.GetToken());
        return decoded;
    }

};

export default Auth;