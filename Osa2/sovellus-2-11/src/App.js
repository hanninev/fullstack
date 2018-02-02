import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newPerson: '',
      showAll: true
    }
    console.log('constructor')
  }

  componentWillMount() {
    console.log('will mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  render() {
    console.log('render')
        return (
            <table><tbody>
                {this.state.persons.map(person => <tr key={person.name}><th>{person.name}</th><th>{person.number}</th></tr>)}
            </tbody></table>
  )
}
}

export default App