import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
require('dotenv').load();

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
registerServiceWorker();