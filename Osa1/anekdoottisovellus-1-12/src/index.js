import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }

    chooseAnecdote = (value) => {
        return () => {
            this.setState({ selected: value })
        }
    }

    addVote = (value) => {
        return () => {
            votes[value] = votes[value] + 1
            this.forceUpdate()
        }
    }

    getMaxIndexOfMaxValue() {
        return votes.indexOf(Math.max.apply(null, votes))
    }

    render() {
        let value = Math.floor((Math.random() * anecdotes.length))

        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <p>has {this.props.votes[this.state.selected]} votes</p>
                <Button toiminto={this.addVote(this.state.selected)} teksti={'vote'} />
                <Button toiminto={this.chooseAnecdote(value)} teksti={'next anecdote'} />

                <h2>anecdote with most votes:</h2>
                <p>{this.props.anecdotes[this.getMaxIndexOfMaxValue()]}</p>
                <p>has {this.props.votes[this.getMaxIndexOfMaxValue()]} votes</p>


            </div>
        )
    }
}

const Button = (props) => {
    return (
        <button onClick={props.toiminto}>{props.teksti}</button>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = [0, 0, 0, 0, 0, 0]

ReactDOM.render(
    <App anecdotes={anecdotes} votes={votes} />,
    document.getElementById('root')
)