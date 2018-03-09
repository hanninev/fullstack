import React from 'react'
import { Button, Grid, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

class CreateNew extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      author: '',
      info: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    })
    this.props.history.push('/')
  }

  render() {
    return (
      <Grid>
        <h2>create a new anecdote</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Content</ControlLabel>
            <FormControl type="text" name='content' value={this.state.content} onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Author</ControlLabel>
            <FormControl type="text" name='author' value={this.state.author} onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Url for more info</ControlLabel>
            <FormControl type="text" name='info' value={this.state.info} onChange={this.handleChange} />
          </FormGroup>

          <Button type="submit">create</Button>
        </form>
      </Grid>
    )

  }
}

export default CreateNew