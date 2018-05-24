import React from 'react'
import PropTypes from 'prop-types'


const ResponseBubble  = ({ text }) => (
    <div className='response'>
        {text}
    </div>
);


ResponseBubble.propTypes = {
    text: PropTypes.string.isRequired
};


const ResponseList = ({ responses }) => (
    <div className='response-list'>{
        responses.map ((response, index) => (
            <ResponseBubble key={index} {...response} />
        ))
    }</div>
)

ResponseList.propTypes = {
    responses: PropTypes.arrayOf(
        PropTypes.shape(ResponseBubble.propTypes).isRequired
    ).isRequired
}

export default ResponseList;
