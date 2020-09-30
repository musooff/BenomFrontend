import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateShop from './components/CreateShop';
import Home from './components/Home';
import AdditionalShopDetails from './components/AdditionalShopDetails';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop/create" exact component={CreateShop} />
          <Route path="/shop/create/additional/:name" component={AdditionalShopDetails} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
  );
}

export default App;
