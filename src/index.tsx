import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { MainMenu ,MainMenuItem } from './components/MainMenu/MainMenu';
import { Route, HashRouter} from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { ContactPage } from './components/ContactPage/ContactPage';
import { UserLoginPage } from './components/UserLoginPage/UserLoginPage';

const menuItems = [
  new MainMenuItem("Home", "/"),
  new MainMenuItem("Contact","/contact/"),
  new MainMenuItem("Log in","/user/login/"),
]



ReactDOM.render(
  <React.StrictMode>
    <MainMenu items = {menuItems} ></MainMenu>
      <HashRouter>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/user/login" component={UserLoginPage}/>
        </Switch>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
