const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0
    }
}

const reducer = (store = [], action) => {
  console.log(action.type)
    if (action.type === 'VOTE') {
        const old = store.filter(a => a.id !== action.id)
        const voted = store.find(a => a.id === action.id)

        return [...old, { ...voted, votes: voted.votes + 1 }]
    }
    if (action.type === 'CREATE') {

        return [...store, action.data]
    }
    if (action.type === 'INIT_ANECDOTES') {
        return action.data
    }

    return store
}

export const anecdoteCreation = (content) => {
  return {
    type: 'CREATE',
    data: content
  }
}

export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

export const anecdoteVoter = (anecdote) => {
  return { 
    type: 'VOTE', 
    id: anecdote.id
  }
}

export default reducer