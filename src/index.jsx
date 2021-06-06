import '@SCSS/index'

import "core-js/stable";
import "regenerator-runtime/runtime";
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {saga} from '@redux/saga/saga.js'
import sagaWatcher from '@redux/saga/sagaWatcher.js'
import AppWrapper from '@react/AppWrapper.jsx'


const  ReactRender = ReactDOM.render;

saga.run(sagaWatcher);
ReactRender(<AppWrapper />, document.getElementById('root'));