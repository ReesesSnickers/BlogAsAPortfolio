import React from 'react'
import PropTypes from 'prop-types';

import {
    Link
} from 'react-router-dom';

const Card = (props) => (
    <div style={{color: "black", textDecoration: "none", backgroundColor: "White", flexGrow: "1", margin: "20px"}}>
        <Link to={`/${props.title }`} style={{color: "black", textDecoration: "none"}}>
            <div style={{height: "100%", width: "100%"}}>
                {/* <img src={props.img} alt={props.altText} /> */}
                <p>{props.title}</p>
            </div>
        </Link>
    </div>
);

Card.propTypes = {
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