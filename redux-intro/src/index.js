import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';

// Redux steps follow here
import { Provider } from 'react-redux'; // Provider is a component!
import { createStore, applyMiddleware } from 'redux'; // createStore is a function!
import logger from 'redux-logger'; // We can now see the before and after of each redux state change.

import reducers from './components/redux/reducers/app.reducer.js';

const storeInstance = createStore(
  reducers,
  applyMiddleware(logger) // This is the whole logger piece. It's done.
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();