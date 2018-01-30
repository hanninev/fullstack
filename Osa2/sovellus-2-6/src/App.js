import React from 'react';
import styles from './styles.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
        number: '0401234567' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
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
    const persons = this.state.persons.concat(personObject)

    this.setState(
      {
        persons: persons,
        newName: '',
        newNumber: ''
      }
    )
    } else {
      alert('Et voi lisätä saman nimistä henkilöä!')
    }
  }

  render() {
    const personsToShow = this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
            rajaa näytettäviä 
            <input
            value={this.state.filter}
            onChange={this.handleFilterChange}
             />
         </div>
         <h3>Lisää uusi</h3>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: 
            <input
            value={this.state.newName}
            onChange={this.handleNameChange}
             />
          </div>
          <div>
            numero: 
            <input
            value={this.state.newNumber}
            onChange={this.handleNumberChange}
             />
          </div>
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

export default App