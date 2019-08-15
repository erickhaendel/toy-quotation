import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

// import Login from './pages/Login';
import Main from './pages/Main/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            {/* <Route path="/dev/:id" component={Main} /> */}
        </BrowserRouter>
    )
}