import RouteNames from './names';
import WelcomeContainer from "../containers/WelcomeContainer";
import LoginFormContainer from "../containers/LoginFormContainer";
import Me from "../components/Me";
import Auth from "../helpers/Auth";

const routes = {
    [RouteNames.HOME]: {
        component: WelcomeContainer,
        name: "Home",
        path: '/',
        exact: true
    },
    [RouteNames.LOGIN]: {
        component: LoginFormContainer,
        name: "Login",
        path: '/login'
    },
    [RouteNames.ME]: {
        component: Me,
        name: "My account",
        path: '/me',
        canOpen: () => {
            return Auth.IsLogged();
        },
        redirect: RouteNames.LOGIN
    }
};

export default routes;