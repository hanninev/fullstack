import React from 'react'
import { notificationCreation, notificationRemover } from '../reducers/notificationReducer';
import { anecdoteVoter } from '../reducers/anecdoteReducer'
import Filter from './Filter'
import PropTypes from 'prop-types'

class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { anecdotes, filter } = this.context.store.getState()
    const anecdotesToShow = anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))

    return (
      <div>
        <h2>Anecdotes</h2>

        <Filter />

        {anecdotesToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.context.store.dispatch(anecdoteVoter(anecdote))
                this.context.store.dispatch(notificationCreation('You voted "' + anecdote.content + '" '))
                setTimeout(() => {
                  this.context.store.dispatch(notificationRemover())
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

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
