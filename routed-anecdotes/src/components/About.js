import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const About = () => (
        <Grid>
        <Row>
        <Col xs={12} sm={12} md={12}>   
      <h2>About anecdote app</h2>
      <p>According to Wikipedia:</p>
        </Col>
        </Row>
        <Row>
        <Col xs={12} sm={8} md={8}>
      <em>An anecdote is a brief, revealing account of an individual person or an incident.
        Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
        such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
        An anecdote is "a story with a point."</em>
  
      <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
        </Col>
        <Col xsPush={0} sm={4} md={4}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Linus_Torvalds_talking.jpeg" height="300" width="200" alt=""/>
    </Col>
    </Row>
    </Grid>
  )

  export default About