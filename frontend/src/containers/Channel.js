import ResponseList from '../components/ResponseList'
import { connect } from 'react-redux'


const sortResponses = responses => {
    return responses
}

const mapStateToProps = state => {
    console.log(state)

    return {
        responses: sortResponses(state.responses)
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const ResponseChannel = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResponseList)

export default ResponseChannel