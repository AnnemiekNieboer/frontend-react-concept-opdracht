import React from 'react';
import './Homepage.css';
import logo from '../../assets/logo.png'
import {Link, NavLink} from "react-router-dom";

function Homepage() {
    return (
        <>
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
                        <img className="header__logo" src={logo} alt="reddit-logo"/>
                        <h1>reddit</h1>
                    </div>
                </div>
            </header>
            <main className="outer-container__reusable">
                <div className="inner-container__reusable main-hottest-posts__header">
                    <h2>Hottest posts</h2>
                    <h4>on Reddit right now</h4>
                </div>
                <div className="inner-container__reusable">
                    <div className="main-hottest-posts__cards-section">
                        <article className="hottest-posts__card">
                            <h3 className="hottest-posts__card-header">Placeholder title</h3>
                            <div>
                                <Link className="hottest-posts__card-link" to="/">Placeholder link</Link>
                                <p className="hottest-posts__comments">Comments ... - Ups ...</p>
                            </div>
                        </article>
                        <article className="hottest-posts__card">
                            <h3 className="hottest-posts__card-header">Placeholder title</h3>
                            <div>
                                <Link className="hottest-posts__card-link" to="/">Placeholder link</Link>
                                <p className="hottest-posts__comments">Comments ... - Ups ...</p>
                            </div>
                        </article>
                        <article className="hottest-posts__card">
                            <h3 className="hottest-posts__card-header">Placeholder title</h3>
                            <div>
                                <Link className="hottest-posts__card-link" to="/">Placeholder link</Link>
                                <p className="hottest-posts__comments">Comments ... - Ups ...</p>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
            <footer className="outer-container__reusable">
                <div className="inner-container__reusable footer__text">Gemaakt door: Annemiek Nieboer, in opdracht van NOVI Hogeschool © 2022</div>
            </footer>
        </>
    );
}

export default Homepage;