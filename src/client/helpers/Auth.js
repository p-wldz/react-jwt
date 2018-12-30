import jwt_decode from 'jwt-decode';

export function SaveToken(token){
    localStorage.setItem('token', token);
};

export function IsLogged(){
    let token = localStorage.getItem('token');
    if (token == null)
    {
        return false;
    }
    return true;
};

export function GetToken()
{
    return localStorage.getItem('token');
}

export function GetUserData()
{
    let decoded = jwt_decode(GetToken());
    return decoded;
}