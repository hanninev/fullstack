import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get('http://localhost:3001/anecdotes')
  return response.data
}

const createNew = async (content) => {
    const response = await axios.post(url, { content, votes: 0 })
    console.log(response.data)
    return response.data
  }

const makeVote = async (anecdote) => {
    const response = await axios.put(url + '/' + anecdote.id, { content: anecdote.content, votes: anecdote.votes+1 })
    console.log(response.data)
    return response.data
  }
  
  export default {
    getAll, createNew, makeVote
  }