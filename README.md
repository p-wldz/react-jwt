# Training with JWT

Creating NodeJS API server

Creating ReactJS app.

Including react-router with protected pages (JWT required).

# Features

Has been used previous project with router manager: https://github.com/p-wldz/react-router-manager

Added new function - addictional: **canOpen** with **redirect**
It is optional property, you can specify callback and determine if a person can open this page.

    [RouteNames.ME]: {
        component: Me,
        name: "My account",
        path: '/me',
        canOpen: () => {
            return Auth.IsLogged();
        },
        redirect: RouteNames.LOGIN
    }