import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newPerson: ''
    }
  }

  handleChange = (event) => {
    this.setState({ newPerson: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()
    console.log('painettu nappulaa')

    const personObject = {
      name: this.state.newPerson
    }

    const persons = this.state.persons.concat(personObject)

    this.setState(
      {
        persons: persons,
        newPerson: ''
      }
    )
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: 
            <input 
            value={this.state.newPerson}
            onChange={this.handleChange}
             />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <li>{person.name}</li>)}
      </div>
      
    )
  }
}

export default App