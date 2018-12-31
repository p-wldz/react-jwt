import React from 'react';
import { RouteLink } from '../helpers/Router';
import RouterNames from "../routes/names";

const Menu = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <RouteLink name={RouterNames.HOME}> </RouteLink>
                    </li>
                    <li>
                        <RouteLink name={RouterNames.LOGIN}> </RouteLink>
                    </li>
                    <li>
                        <RouteLink name={RouterNames.ME}> </RouteLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;