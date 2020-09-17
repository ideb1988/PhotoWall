import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {

    const post = props.post;

    const element = <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption><p> {post.description} </p></figcaption>
        <div className="button-container">
            <button className="button" onClick={() => {
                props.onRemovePhoto(post);
            }}> Remove </button>
        </div>
    </figure>;

    return element;
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo;