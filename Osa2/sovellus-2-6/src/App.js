import React from 'react';
import styles from './styles.css'
import personService from './services/persons'

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

  componentDidMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({persons: response})
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

      personService
      .create(personObject)
      .then(response => {
        this.setState({
          persons: this.state.persons.concat(response),
          newName: '',
          newNumber: ''
        }
      )
    })

    } else {
      if (window.confirm(dublicates[0].name + " on jo luettelossa, korvataanko vanha numero uudella?")) { 
      personService
        .update(dublicates[0].id, personObject)
        .then(personObject => {
          const persons = this.state.persons.filter(p => p.id !== dublicates[0].id)
          this.setState({
            persons: persons.concat(personObject),
            newName: '',
            newNumber: ''
          })
        })
          }
        }
  }

  deletePerson = (pers) => {
    return () => {
      if (window.confirm("Poistetaanko " + pers.name + "?")) { 
        personService
        .remove(pers.id)
        .then(response => {
          this.setState({persons: this.state.persons.filter(person => person.id !== pers.id)})
        })
      }
  }
}

  render() {
    console.log(this.state.persons)

    let personsToShow = []
    if (this.state.filter.length > 0) {
    personsToShow = this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  } else {
      personsToShow = this.state.persons
  }

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
        {personsToShow.map(person => <tr key={person.name}><th>{person.name}</th><th>{person.number}</th><th><Button nappi={'Poista'} toiminto={this.deletePerson(person)} /></th></tr>)}
        </tbody></table>
      </div>
      
    )
  }
}

const Button = (props) => {
  return (
      <button onClick={props.toiminto}>{props.nappi}</button>
  )
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