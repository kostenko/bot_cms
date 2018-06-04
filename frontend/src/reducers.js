import { GET_STATE_RECEIVED } from './actions.js'


// TODO: Replace with initial data load
const initialState = {
    responses: [

        {
            text: 'Hello'
        },

        {
            text: 'Hello Again'
        },

    ]
}

const botReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    if (action.type === GET_STATE_RECEIVED) {
        console.log('Retrieved states!', action)

        return {...state, responses: [...state.responses, action.state]}

    }

    return state
}

module.exports = {
    botReducer: botReducer
}