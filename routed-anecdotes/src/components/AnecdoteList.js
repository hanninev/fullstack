import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, ListGroupItem, ListGroup } from 'react-bootstrap'

const AnecdoteList = ({ anecdotes }) => (
    <Grid>
      <h2>Anecdotes</h2>
      
      <ListGroup>
        {anecdotes.map(a =>
            <ListGroupItem key={a.id}><Link to={`/anecdotes/${a.id}`}>{a.content}</Link></ListGroupItem>
        )}
      </ListGroup>
    </Grid>
)

  export default AnecdoteList