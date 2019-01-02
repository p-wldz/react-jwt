export const UserLogged = (token) => ({
    type: 'USER_LOGGED',
    token
});

export const UserLogout = () => ({
    type: 'USER_LOGOUT'
})