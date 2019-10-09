import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './features/HomePage/homepage';
import Layout from './features/Layout/index';

const routing = () => {
    return (
    <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/layout" render={()=>{
            return(<Layout/>);
          }}
        />
        </div>
    </Router>
    )
}

export default routing;