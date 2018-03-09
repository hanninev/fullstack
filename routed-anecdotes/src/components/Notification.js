import React from 'react'
import { Alert, Grid } from 'react-bootstrap'

const Notification = ({ message }) => {
    if (message !== null) {
        return (
            <Grid>
                <Alert bsStyle="success">{message}</Alert>
            </Grid>
        )
    }
    return (
        <div></div>
    )
}

export default Notification