import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
}
  from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
    
        <Router path='/checkout'>
            <Header />
            <h1>I am the checkout page!</h1>
          </Router>

          <Router path='/'>
            <Header />
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
