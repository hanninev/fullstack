import React from 'react'
import { notificationCreation, notificationRemover } from '../reducers/notificationReducer';
import { anecdoteVoter } from '../reducers/anecdoteReducer'
import Filter from './Filter'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteList extends React.Component {
  handleVote = async (anecdote) => {
    const votedAnecdote = await anecdoteService.vote(anecdote)
    this.props.anecdoteVoter(votedAnecdote)
    this.props.notificationCreation('You voted "' + votedAnecdote.content + '" ')
    setTimeout(() => {
      this.props.notificationRemover()
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>

        <Filter />

        {this.props.visibleAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={async () => {
                 const votedAnecdote = await anecdoteService.vote(anecdote)
                 this.props.anecdoteVoter(votedAnecdote)
                 this.props.notificationCreation('You voted "' + votedAnecdote.content + '" ')
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

const anecdotesToShow = (anecdotes, filter) => {
  console.log(filter)
  console.log(anecdotes)
  return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  console.log(state.anecdotes)
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
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