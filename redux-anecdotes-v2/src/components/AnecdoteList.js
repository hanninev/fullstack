import React from 'react'
import { notify } from '../reducers/notificationReducer';
import { anecdoteVoter } from '../reducers/anecdoteReducer'
import Filter from './Filter'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteList extends React.Component {

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
              <button onClick={() => {
                 this.props.anecdoteVoter(anecdote)
                 this.props.notify(`you voted '${anecdote.content}'`, 10)
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
  notify
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList

AnecdoteList.contextTypes = {
  store: PropTypes.object
}