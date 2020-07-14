import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import FlowChart from './Pages/FlowChart'


ReactDOM.render(
  <FlowChart/>
 ,
  document.getElementById('root')
);

serviceWorker.unregister();
