
const initialState = {
    filter: ''
  }

const filterReducer = (state = initialState.filter, action) => {
    console.log(action.type)
    if (action.type === 'SET_FILTER') {
        return action.filter
    }
    return state
}
  
export const filterCreation = (filter) => {
    return {
      type: 'SET_FILTER',
      filter: filter
    }
  }

  export default filterReducer