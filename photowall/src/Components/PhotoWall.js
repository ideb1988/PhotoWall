import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function PhotoWall(props) {

    const posts = props.posts;

    const element = <div className="photoGrid">{
        posts.map((post, index) => {
            return <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>
        })
    }
    </div>;

    return element;
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall;