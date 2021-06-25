import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import AboutUs from './components/AboutUs'
import Forms from './components/Forms';
import FAQ from './components/FAQ';
import Plots from './components/Plots';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/about' component={AboutUs}/>
          <Route path='/forms' component={Forms}/>
          <Route path='/faq/:id' component={FAQ}/>
          <Route path='/plots' component={Plots}/>
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);