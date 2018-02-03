import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
    console.log('constructor')
  }

  componentWillMount() {
    console.log('will mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ countries: response.data })
      })
  }

  handleSearch = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    const countriesToShow = this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.filter.toLowerCase()));

    console.log('render')
    if(countriesToShow.length>10) {
      return (
        <div>
              find countries:
            <input value={this.state.filter} onChange={this.handleSearch}/>
            <p>too many matches, specify another filter</p>
            </div>
      )
    } else if  (countriesToShow.length>1) {
        return (
            <div>
              find countries:
            <input value={this.state.filter} onChange={this.handleSearch}/>
            {countriesToShow.map(country => <p key={country.name}>{country.name}</p>)}
            </div>
    )
    } else {
    return (
      <div>
              find countries:
            <input value={this.state.filter} onChange={this.handleSearch}/>
            {countriesToShow.map(country => <div key={country.name}>
              <h2>{country.name}</h2>
              <p>capital: {country.capital}</p>
              <p>population: {country.population}</p>
              <img src={country.flag} alt="" height="300" width="500"></img>
              </div>)}
            </div>
    )
  }
}


}

export default App