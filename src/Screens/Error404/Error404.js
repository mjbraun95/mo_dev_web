import React from 'react';

import { Link } from 'react-router-dom'

import './error404.scss'
import logo from '../../assets/logo.png'

class Error404 extends React.Component {
    render() {
        return (
            <div className="error404">
                <Link to="/"><img src={logo} alt="Click to go Home" /></Link>
                <h1>Error 404: Page not found</h1>
                <h3>Looks like we've managed to wander off the path. Let's head back <Link to="/">home</Link></h3>
            </div>
        );
    }
}

export default Error404;