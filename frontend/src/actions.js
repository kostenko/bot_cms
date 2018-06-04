import fetch from 'cross-fetch'


export const GET_STATE = 'GET_STATE'

export const getState = (context) => (
    {
        type: GET_STATE,
        context: context
    }
)


export const GET_STATE_RECEIVED = 'GET_STATE_RECEIVED'

export const getStateReceived = (state) => (
    {
        type: GET_STATE_RECEIVED,
        state: state
    }
)


export const respondToUser = (context) => (
    (dispatch) => {
        dispatch(getState(context))

        return fetch('http://localhost:8000/bot/state')
            .then(
                response => response.json(),
                error => console.log('Could not get bot state', error)
            )
            .then(
                json => dispatch( getStateReceived(json) )
            )
    }
)
