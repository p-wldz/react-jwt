import Auth from "../helpers/Auth";

const user = (state = [], action) => {
    switch (action.type) {

        case 'USER_LOGGED':
            Auth.SaveToken(action.token);
            let userdata = Auth.GetUserData();
            return {...state, name: userdata.name};
        default:
            return []
    }
}
export default user;