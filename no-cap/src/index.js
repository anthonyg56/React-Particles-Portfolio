import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Apps';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animate.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
