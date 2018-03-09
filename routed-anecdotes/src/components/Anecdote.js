import React from 'react'
import { Label, Grid } from 'react-bootstrap'

const Anecdote = ({ anecdote }) => {
    return (
      <div>
        <Grid>
        <h2>{anecdote.content}</h2>
        <div><Label>has {anecdote.votes} votes</Label>
        <p></p>
          <p>for more info see <a href={anecdote.info}>{anecdote.info}</a></p>
        </div>
        </Grid>
      </div>
    )
  }

  export default Anecdote