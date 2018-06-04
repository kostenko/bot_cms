import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Channel from './containers/Channel'
import { botReducer } from './reducers'

import logo from './logo.svg';
import './App.css';


const store = createStore(
    botReducer,
    applyMiddleware(thunk)
)

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
