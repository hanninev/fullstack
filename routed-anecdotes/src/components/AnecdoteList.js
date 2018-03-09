import React from 'react'
import { Grid, ListGroupItem, ListGroup } from 'react-bootstrap'

const AnecdoteList = ({ anecdotes }) => (
    <Grid>
      <h2>Anecdotes</h2>
      
      <ListGroup>
        {anecdotes.map(a =>
            <ListGroupItem key={a.id} href={`/anecdotes/${a.id}`}>{a.content}</ListGroupItem>
        )}
      </ListGroup>
    </Grid>
  )

  export default AnecdoteList