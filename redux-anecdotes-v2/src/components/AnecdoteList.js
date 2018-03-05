import React from 'react'
import { notificationCreation, notificationRemover } from '../reducers/notificationReducer';
import { anecdoteVoter } from '../reducers/anecdoteReducer'
import Filter from './Filter'

class AnecdoteList extends React.Component {
  render() {
    const { anecdotes, filter } = this.props.store.getState()
    const anecdotesToShow = anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))

    return (
      <div>
        <h2>Anecdotes</h2>

        <Filter store={this.props.store} />

        {anecdotesToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
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
