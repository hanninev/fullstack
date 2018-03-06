const initialState = {
    notification: 'Tervetuloa!'
  }

const notificationReducer = (state = initialState.notification, action) => {
    if (action.type === 'SET_MESSAGE') {
        return [action.notification]
    } else if (action.type === 'REMOVE_MESSAGE') {
        return [action.notification]
    }
    return state
}

export const notify = (message, time) => {
  return async (dispatch) => {
  dispatch ({
    type: 'SET_MESSAGE',
    notification: message
  })
  setTimeout(() => {
    dispatch ({
      type: 'REMOVE_MESSAGE',
      notification: null
    })
  }, time*1000)
 }
}

  export default notificationReducer