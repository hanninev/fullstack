import anecdoteService from '../services/anecdotes'

const reducer = (store = [], action) => {
  console.log(action.type)
    if (action.type === 'VOTE') {
        const old = store.filter(a => a.id !== action.data.id)
        const voted = store.find(a => a.id === action.data.id)
      console.log(action)
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
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch ({
    type: 'CREATE',
    data: newAnecdote
  })
 }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
  dispatch ({
    type: 'INIT_ANECDOTES',
    data: anecdotes
  })
 }
}

export const anecdoteVoter = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.makeVote(anecdote)
  dispatch ({
    type: 'VOTE', 
    data: updatedAnecdote
  })
 }
}

export default reducer