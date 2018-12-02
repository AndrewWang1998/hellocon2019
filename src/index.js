import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ["Roboto+Slab:300", 
      "Abril+Fatface", "Niramit:500", 
      "Permanent+Marker","Philosopher:700i",
      "Racing+Sans+One","Righteous",
      "Roboto+Condensed:700",
      "Work+Sans:800", "Assistant:800","Roboto+Condensed:300"]
    }
  });

  
ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
