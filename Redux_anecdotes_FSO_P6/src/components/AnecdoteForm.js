import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notiReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createNew = async (e) => {
        e.preventDefault()

        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createAnecdote(content))

        // notify
        dispatch(setNotification('Created new anecdote!', 5000))
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={createNew}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm