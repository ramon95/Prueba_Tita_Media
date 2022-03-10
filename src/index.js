import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './routes/App'
import Reducer from './redux/reducers/reducer'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhacers = composeAlt(applyMiddleware(thunk))

const store = createStore(Reducer, composedEnhacers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
