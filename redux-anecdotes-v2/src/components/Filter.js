import React from 'react'
import { filterCreation } from '../reducers/filterReducer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Filter extends React.Component {

    handleChange = (event) => {
      this.props.filterCreation(event.target.value)
    }

    render() {
      const style = {
        marginBottom: 10
      }
  
      return (
        <div style={style}>
          filter <input onChange={this.handleChange}/>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      filter: state.filter
    }
  }

  const mapDispatchToProps = {
    filterCreation
  }
  
  const ConnectedFilter = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)
  export default ConnectedFilter

  Filter.contextTypes = {
    store: PropTypes.object
  }