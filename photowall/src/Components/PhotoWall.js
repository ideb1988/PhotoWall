import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function PhotoWall(props) {

    const posts = props.posts;

    const element =
        <div>
            <Link className="addIcon" to='/AddPhoto'> </Link>
            <div className="photoGrid">{
                posts.map((post, index) => {
                    return <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
                })
            }
            </div>
        </div>;

    return element;
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;