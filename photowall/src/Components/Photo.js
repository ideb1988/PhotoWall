import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {

    const post = props.post;

    const element = <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption><p> {post.description} </p></figcaption>
        <div className="button-container">
            <button className="button" onClick={() => {
                props.removePost(props.index)
            }}> Remove </button>
        </div>
    </figure>;

    return element;
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Photo;