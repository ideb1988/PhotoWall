import React, { Component } from 'react';
import Photo from './Photo';

class PhotoWall extends Component {
    render() {
        const element = <div className="photoGrid">{
            this.props.posts.map((post,index) => {
                return <Photo key={index} post={post} />
            })
        }
        </div>;
        return element;
    }
}

export default PhotoWall;