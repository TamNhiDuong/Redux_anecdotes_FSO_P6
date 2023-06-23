import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getId = () => (100000 * Math.random()).toFixed(0)

const createNew = async (content) => {
    const object = {
        content: content,
        id: getId(),
        votes: 0
    }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const updateAnecdote = async (anecdote) => {
    const url = baseUrl + '/' + anecdote.id
    const res = await axios.put(url, anecdote)
    console.log('res.data: ', res.data)
    return res.data
}

export default { getAll, createNew, updateAnecdote }