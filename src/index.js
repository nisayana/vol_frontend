import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'

import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ActionCableProvider} from 'react-actioncable-provider'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );


