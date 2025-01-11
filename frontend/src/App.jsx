
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormConsulta from './components/FormConsulta';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/FormConsulta" exact component={FormConsulta} />
        {/* Add more routes here */}
      </Switch>
    </Router>
  );
}

export default App