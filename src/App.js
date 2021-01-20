import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './screens/Home'
import NewCrime from './screens/NewCrime'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles.css'
import './assets/css/bootstrap.css'

function App() {
  return (
    <div>
      <Header />
      <div className="App" >
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/newCrime" component={NewCrime} />
        </Switch>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
