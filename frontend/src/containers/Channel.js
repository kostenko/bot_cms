import React, { Component } from 'react'
import { connect } from 'react-redux'

import { respondToUser } from '../actions'
import ResponseList from '../components/ResponseList'


const sortResponses = (responses) => {
    return responses
}


class ResponseChannel extends Component {
    render() {
        return <ResponseList responses={this.props.responses} />
    }

    componentWillMount() {
        let context = {}

        this.props.dispatch(
            respondToUser(context)
        )
    }
}


const mapStateToProps = (state) => {
    return {
        responses: sortResponses(state.responses)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}


ResponseChannel = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResponseChannel)

export default ResponseChannel