import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from "react-redux";
import rootReducer from './reducers';
import {createStore} from "redux";
import connect from "react-redux/es/connect/connect";
import {UserLogged} from "./actions";
import axios from "axios";
import Auth from "./helpers/Auth";

const store = createStore(rootReducer);
const mapStateToProps = state => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    UserLogged: (token) => dispatch(UserLogged(token))
})
const AppConnect = connect(
    mapStateToProps, mapDispatchToProps
)(App);

axios.interceptors.request.use(function(config){
    const token = Auth.GetToken()
    if (token) {
        config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
});



ReactDOM.render(<Provider store={store}>
    <AppConnect />
</Provider>, document.getElementById('root'));
