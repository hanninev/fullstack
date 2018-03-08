import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Notification from './components/Notification'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './services/createNew'
import Anecdote from './components/Anecdote'
import AnecdoteList from './components/AnecdoteList'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: null
    }
  }

  addNew = async (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    this.setState({ anecdotes: this.state.anecdotes.concat(anecdote) })
    this.setState({ notification: 'a new anecdote ' + anecdote.content + ' created!' })
    setTimeout(() => {
      this.setState({ notification: null })
    }, 10000)
  }

  anecdoteById = (id) =>
    this.state.anecdotes.find(a => a.id === id)

  vote = (id) => {
    const anecdote = this.anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

    this.setState({ anecdotes })
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Menu />
            <Route exact path="/" render={() =>
              <div>
                <Notification message={this.state.notification} />
                <AnecdoteList anecdotes={this.state.anecdotes} />
              </div>
            } />
            <Route exact path="/create" render={({ history }) => (<CreateNew history={history} addNew={this.addNew} />)} />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/anecdotes/:id" render={({ match }) =>
              <Anecdote anecdote={this.anecdoteById(match.params.id)} />}
            />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
