import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'


class SinglePhoto extends Component {
    render() {
        const { match, posts } = this.props;
        const id = match.params.id;
        const post = posts.find((post) => post._id === id);
        const comments = this.props.comments[match.params.id] || [];
        const index = this.props.posts.findIndex((post) => post._id === id);
        
        return (
            <div className='single-photo'>
                <Photo key={index} {...this.props} post={post} index={index} />
                <Comments addComment={this.props.addComment} comments={comments} id={id} />
            </div>
        );

    }
}

export default SinglePhoto;
