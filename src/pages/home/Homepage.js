import React, {useEffect, useState} from 'react';
import './Homepage.css';
import logo from '../../assets/logo.png'
import Header from "../../components/Header";
import axios from "axios";
import {Link} from "react-router-dom";

function Homepage() {
    const [redditPosts, setRedditPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                setRedditPosts(result.data.data.children)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <Header>
                <img className="header__logo" src={logo} alt="reddit-logo"/>
                <h1>reddit</h1>
            </Header>
            <main className="outer-container__reusable">
                <div className="inner-container__reusable main-hottest-posts__header">
                    <h2>Hottest posts</h2>
                    <h4>on Reddit right now</h4>
                </div>
                <div className="inner-container__reusable">
                    <section className="main-hottest-posts__cards-section">
                        {redditPosts.map((redditPost) => {
                            return (
                                <article key={redditPost.data.id} className="hottest-posts__card">
                                    <a className="hottest-posts__card-header-link" href={redditPost.data.url}>
                                        <h3 className="hottest-posts__card-header">{redditPost.data.title}</h3>
                                    </a>
                                    <div>
                                        <Link to={`/subreddit/${redditPost.data.subreddit}`} className="hottest-posts__card-link">{redditPost.data.subreddit_name_prefixed}</Link>
                                        <p className="hottest-posts__comments">Comments {redditPost.data.num_comments} - Ups {redditPost.data.ups}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </section>
                </div>
            </main>
        </>
    );
}

export default Homepage;