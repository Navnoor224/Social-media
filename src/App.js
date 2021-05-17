
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Register from './Pages/Register/Register';
function App() {
  return (
    <Router>
      <Route path="/Register" exact render={() =><Register/>}></Route>
    </Router>
  );
}

export default App;
