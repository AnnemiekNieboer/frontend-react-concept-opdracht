import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Subreddit.css';
import Header from "../../components/Header";
import {Link, useParams} from "react-router-dom";

function Subreddit() {
    const { subredditId } = useParams();
    const [postDetails, setPostDetails] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`)
                console.log(response.data.data);
                setPostDetails(response.data.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [subredditId]);

    return (
        <>
            <Header>
                <h1>r/{subredditId}</h1>
                <h4>Subreddit specifications</h4>
            </Header>
            <main className="outer-container__reusable">
                <div className="inner-container__reusable subreddit-main">
                    <h2 className="subreddit-title">Title</h2>
                    <p className="subreddit-text">{postDetails.title}</p>
                    <h2 className="subreddit-title">Description</h2>
                    <p className="subreddit-text">{postDetails.public_description}</p>
                    <h2 className="subreddit-title">Number of subscribers</h2>
                    <p className="subreddit-text">{postDetails.subscribers}</p>
                    <Link className="subreddit-link" to={"/"}>Take me back</Link>
                </div>

            </main>
        </>
    );
}

export default Subreddit;