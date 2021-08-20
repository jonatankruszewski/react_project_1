import './App.css';
import React, { Fragment } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'

import Home from './Components/pages/Home/Home';
import Products from './Components/pages/Products/Products';
import Services from './Components/pages/Services/Services';
import Signup from './Components/pages/Signup/Signup';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' exact component={Home} />
          <Route path='/services' exact component={Home} />
          <Route path='/products' exact component={Home} />
        </Switch>
        <Footer></Footer>
      </Router>
    </Fragment>
  );
}

export default App;
