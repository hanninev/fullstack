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
  
export const notificationCreation = (message) => {
    return {
      type: 'SET_MESSAGE',
      notification: message
    }
  }

export const notificationRemover = () => {
    return {
      type: 'REMOVE_MESSAGE',
      notification: null
    }
  }

  export default notificationReducer