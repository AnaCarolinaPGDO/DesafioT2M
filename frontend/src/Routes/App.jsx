import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormConsulta from './FormConsulta';
import MarcarConsulta from './MarcarConsulta';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/form-consulta" component={FormConsulta} />
                <Route path="/marcar-consulta" component={MarcarConsulta} />
            </Switch>
        </Router>
    );
};

export default App;