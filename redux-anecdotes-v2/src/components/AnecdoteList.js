import React from 'react'
import { notificationCreation, notificationRemover } from '../reducers/notificationReducer';
import { anecdoteVoter } from '../reducers/anecdoteReducer'

class AnecdoteList extends React.Component {
  render() {
    const anecdotes = this.props.store.getState().anecdotes

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.store.dispatch(anecdoteVoter(anecdote))
                this.props.store.dispatch(notificationCreation('You voted "' + anecdote.content + '" '))
                setTimeout(() => {
                  this.props.store.dispatch(notificationRemover())
                }, 5000)
              }}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
