import React from 'react'
import { notificationCreation, notificationRemover } from '../reducers/notificationReducer';
import { anecdoteVoter } from '../reducers/anecdoteReducer'
import Filter from './Filter'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {

  render() {
    const { anecdotes, filter } = this.props
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
                this.props.anecdoteVoter(anecdote)
                this.props.notificationCreation('You voted "' + anecdote.content + '" ')
                setTimeout(() => {
                  this.props.notificationRemover()
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  anecdoteVoter,
  notificationCreation,
  notificationRemover
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList

AnecdoteList.contextTypes = {
  store: PropTypes.object
}