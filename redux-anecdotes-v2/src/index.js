import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer from './reducers/anecdoteReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
})

const store = createStore(reducer)

console.log(store.getState())

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)