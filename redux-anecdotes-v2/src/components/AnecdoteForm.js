import React from 'react'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { notificationCreation, notificationRemover } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch(
    anecdoteCreation(e.target.anecdote.value)
    )  
    e.target.anecdote.value = ''
  
    this.props.store.dispatch(notificationCreation('New anecdote added!'))
    setTimeout(() => {
      this.props.store.dispatch(notificationRemover())
    }, 5000)
  }
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}

export default AnecdoteForm
