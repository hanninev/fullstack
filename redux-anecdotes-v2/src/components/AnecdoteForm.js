import React from 'react'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { notificationCreation, notificationRemover } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.anecdoteCreation(e.target.anecdote.value) 
    e.target.anecdote.value = ''
  
    this.props.notificationCreation('New anecdote added!')
    setTimeout(() => {
      this.props.notificationRemover()
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  anecdoteCreation,
  notificationCreation,
  notificationRemover
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)
export default ConnectedAnecdoteForm

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}