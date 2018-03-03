import React from 'react';

class App extends React.Component {
  addNew = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_NEW',
      content: event.target.anecdote.value
    })
    event.target.anecdote.value = ''
  }
  
  render() {
    const anecdotes = this.props.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes
        .sort((a, b) => b.votes-a.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.props.store.dispatch({ type: 'VOTE', id: anecdote.id })}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addNew}>
          <input name="anecdote" />
          <button type="submit">create</button> 
        </form>
      </div>
    )
  }
}

export default App