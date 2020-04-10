import React from 'react';
import './App.css';
import {ProductList} from './Pages/ProductList' 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProductDetails from './Pages/ProductList/Blocks/ProductDetails';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' component={ProductList} exact/>
          <Route path='/details' component={ProductDetails} />
        </Switch>
      </Router>
  );
}

export default App;
