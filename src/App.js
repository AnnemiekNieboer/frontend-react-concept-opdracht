import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Homepage from "./pages/home/Homepage";
import Subreddit from "./pages/subreddit/Subreddit";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/subreddit/:subredditId">
                    <Subreddit/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
