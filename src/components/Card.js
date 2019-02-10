import React from 'react'
import PropTypes from 'prop-types';

const Card = (props) => (
    <div style={{backgroundColor: "blue", width: "300px", height: "350px"}}>
        <img src={props.img} alt={props.altText} />
        <p>{props.title}</p>
    </div>
);

Card.ropTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

Card.defaultProps = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6z4Two4jhI14cLjWGofvW8bnSdCMSgV9qUWZhB2WBPYGz4KC',
    altText: "default photo",
    title: "No title provided"
};

export default Card;