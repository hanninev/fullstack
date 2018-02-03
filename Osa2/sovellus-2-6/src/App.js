import React from 'react';
import styles from './styles.css'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    const dublicates = this.state.persons.filter(person => person.name === this.state.newName)

    if (dublicates.length === 0) {

    axios.post('http://localhost:3001/persons', personObject)
    .then(response => {
      this.setState(
        {
          persons: this.state.persons.concat(response.data),
          newName: '',
          newNumber: ''
        }
      )
    })

    } else {
      alert('Et voi lisätä saman nimistä henkilöä!')
    }
  }

  render() {
    const personsToShow = this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Textbox text={'rajaa näytettäviä'} value={this.state.filter} handler={this.handleFilterChange} />
         <h3>Lisää uusi</h3>
        <form onSubmit={this.addPerson}>
          <Textbox text={'nimi'} value={this.state.newName} handler={this.handleNameChange} />
          <Textbox text={'numero'} value={this.state.newNumber} handler={this.handleNumberChange} />
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h3>Numerot</h3>
        <table><tbody>
        {personsToShow.map(person => <tr key={person.name}><th>{person.name}</th><th>{person.number}</th></tr>)}
        </tbody></table>
      </div>
      
    )
  }
}

const Textbox = (props) => {
  return(
    <div>
    {props.text} 
      <input
      value={props.value}
      onChange={props.handler}
      />
    </div>
  )
}

export default App