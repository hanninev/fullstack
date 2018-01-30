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
      newNumber: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
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
    return (
      <div>
        <h2>Puhelinluettelo</h2>
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
        <h2>Numerot</h2>
        <table><tbody>
        {this.state.persons.map(person => <tr key={person.name}><th>{person.name}</th><th>{person.number}</th></tr>)}
        </tbody></table>
      </div>
      
    )
  }
}

export default App