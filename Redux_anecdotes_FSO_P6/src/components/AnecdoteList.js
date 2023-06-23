import { useDispatch, useSelector } from 'react-redux'

import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notiReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        const filterInput = state.filter

        if (filterInput.length === 0) {
            return state.anecdotes
        }

        return state.anecdotes.filter(ane => ane.content.includes(filterInput))
    })
    const dispatch = useDispatch()

    const voteAnecdote = (anecdote) => {
        dispatch(vote(anecdote))

        // notify
        dispatch(setNotification('Like anecdote!', 5000))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => voteAnecdote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList