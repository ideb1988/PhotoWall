import React from 'react';
import Photo from './Photo';

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

export default PhotoWall;