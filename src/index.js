import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title={"Burger builder"}/>, document.getElementById('root'));
registerServiceWorker();
