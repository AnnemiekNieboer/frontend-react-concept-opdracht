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
                            <a className="header-navigation__nav-link" href="https://www.reddit.com/">reddit</a>
                        </li>
                        <li className="header-navigation__list-items">
                            <NavLink className="header-navigation__nav-link" to="/subreddit/memes">memes</NavLink></li>
                    </ul>
                </nav>
                <div className="header__hero-section">
                    {children}
                </div>
            </div>
        </header>
    );
}
export default Header;