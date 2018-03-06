import React from 'react';
import ReactDOM from 'react-dom';
import AppDescription from './AppDescription.jsx';

let roomId = window.location.href.split('/')[4];

ReactDOM.render( <AppDescription roomId={roomId} />, document.getElementById('description-service'));
