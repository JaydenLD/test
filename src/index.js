import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 	SiderDemo from './router/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SiderDemo />, document.getElementById('root'));
registerServiceWorker();
