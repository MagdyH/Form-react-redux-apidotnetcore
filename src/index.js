import  * as  React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import '../node_modules/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import {Provider} from "react-redux";
import {getAllUsers} from './API/UserAPI'

store.dispatch(getAllUsers());
ReactDOM.render(<Provider store={store}>
                     <Root />                       
                </Provider>
                , document.getElementById('root'));
registerServiceWorker();
