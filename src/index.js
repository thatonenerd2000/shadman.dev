import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss'

import Home from "./comp/Home.jsx"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class MyRouter extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>

        )
    }
}

class Main extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="main">
                <MyRouter />
            </div>
        )
    }
}

ReactDOM.render(<Main/>,document.getElementById('root'));