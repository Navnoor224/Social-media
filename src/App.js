import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Route path = "/" exact render = {() => <Home />} />
      <Route path = "/login" exact render = {() => <Login />} />
    </Router>
    </>
  );
}

export default App;
