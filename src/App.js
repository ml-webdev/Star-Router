import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Movies from './Components/Movies';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch className="nav">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/movies" component={Movies}/>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
