import React from 'react';

import Welcome from './Components/Welcome';
import Home from './Components/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/react-web-portal" element={<Welcome />} />
                    <Route path="/react-web-portal/home/" element={<Home />} />
                </Routes>
            </Router> 
        );
    }
}