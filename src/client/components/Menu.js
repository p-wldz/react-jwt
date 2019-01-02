import React from 'react';
import { RouteLink } from '../helpers/Router';
import RouterNames from "../routes/names";

const Menu = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <RouteLink className="nav-link" name={RouterNames.HOME}> </RouteLink>
                    </li>
                    <li className="nav-item">
                        <RouteLink className="nav-link" name={RouterNames.LOGIN}> </RouteLink>
                    </li>
                    <li className="nav-item">
                        <RouteLink className="nav-link" name={RouterNames.ME}> </RouteLink>
                    </li>
                    {(props.logged) ? (<li className="nav-item">
                        <RouteLink className="nav-link" name={RouterNames.LOGOUT}> </RouteLink>
                    </li>) : null}
                </ul>
            </nav>
        </div>

    );
}

export default Menu;