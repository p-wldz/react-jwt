# Training with JWT

Creating NodeJS API server

Creating ReactJS app.

Including react-router with protected pages (JWT required).

# Features

Has been used previous project with router manager: https://github.com/p-wldz/react-router-manager

Added new function - additional: **canOpen** with **redirect**
They are optional properties, you can specify callback and determine if a person can open this page.
After it you can specify where user should be redirected.

    [RouteNames.ME]: {
        component: Me,
        name: "My account",
        path: '/me',
        canOpen: () => {
            return Auth.IsLogged();
        },
        redirect: RouteNames.LOGIN
    }