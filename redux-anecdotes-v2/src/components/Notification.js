import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Notification extends React.Component {

  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }    
    if (this.props.notification[0] !== null) {
      return (
      <div style={style}>
        {this.props.notification}
      </div>
      )
    } else {
      return (
      <div></div>
      )
      }
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(
  mapStateToProps
)(Notification)
export default ConnectedNotification

Notification.contextTypes = {
  store: PropTypes.object
}