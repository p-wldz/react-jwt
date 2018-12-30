import {GetUserData, SaveToken} from "../helpers/Auth";

const user = (state = [], action) => {
    switch (action.type) {

        case 'USER_LOGGED':
            SaveToken(action.token);
            let userdata = GetUserData();
            return {...state, name: userdata.name};
        default:
            return []
    }
}
export default user;