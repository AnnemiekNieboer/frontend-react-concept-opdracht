import React from 'react';
import {NavLink} from "react-router-dom";

function Header({children}) {
    return (
        <header className="outer-container__reusable">
            <div className="inner-container__reusable">
                <nav>
                    <ul className="header-navigation__list">
                        <li className="header-navigation__list-items">
                            <NavLink className="header-navigation__nav-link" to="/">hottest posts</NavLink>
                        </li>
                        <li className="header-navigation__list-items">
                            <NavLink className="header-navigation__nav-link" to="/">reddit</NavLink>
                        </li>
                        <li className="header-navigation__list-items">
                            <NavLink className="header-navigation__nav-link" to="/">memes</NavLink></li>
                    </ul>
                </nav>
                <div className="header__hero-section">
                    {children}
                </div>
            </div>
        </header>    );
}
export default Header;