import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  handleChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: this.state.newName
    }

    const dublicates = this.state.persons.filter(person => person.name === this.state.newName)

    if (dublicates.length === 0) {
    const persons = this.state.persons.concat(personObject)

    this.setState(
      {
        persons: persons,
        newName: ''
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
            <input type="text"
            value={this.state.newName}
            onChange={this.handleChange}
             />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <li key={person.name}> {person.name}</li>)}
      </div>
      
    )
  }
}

export default App