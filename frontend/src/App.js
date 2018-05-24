import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import logo from './logo.svg';
import './App.css';


////

const initialState = {
    responses: [

        {
            text: 'Hello'
        },

        {
            text: 'Hello Again'
        },

    ]
}

const botApp = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    return state
}

const store = createStore(botApp)

////

import Channel from './containers/Channel'


const App = () => (
  <Provider store={store}>
    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Channel />
    </div>
  </Provider>

)

export default App
