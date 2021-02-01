import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/index';
import About from './pages/about';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
     <NavBar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/about' exact component={About} />
     </Switch>
   </Router>
  );
}

export default App;
