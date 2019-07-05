import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import AboutMe from './Components/AboutMe/aboutMe'
import Contact from './Components/Contact/contact'
import NavBar from './Components/Navbar/navbar'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <NavBar />
            <Route exact path="/" component={App} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
