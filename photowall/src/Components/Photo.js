import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Photo(props) {
    const post = props.post
    return <figure className="figure">
        <Link to={`/single/${post._id}`}> <img className="photo" src={post.url} alt={post.description} /></Link>
        <figcaption> <p> {post.description} </p> </figcaption>
        <div className="button-container">
            <button onClick={() => {
                props.removePost(post._id)
                props.history.push('/')
            }}> Remove </button>
            <Link className="button" to={`/single/${post._id}`}>
                <div className="comment-count">
                    <div className="speech-bubble"> </div>
                    {props.comments[post._id] ? props.comments[post._id].length : 0}
                </div>
            </Link>
        </div>
    </figure>
}


Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Photo;