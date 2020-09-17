import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import Title from './Title';

const posts = require('../Resourses/posts');

class Main extends Component {
    constructor() {
        super();
        this.state = { posts: posts };
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemoved) {
        this.setState((state) => {
            return {
                posts: state.posts.filter((post) => {
                    return post !== postRemoved;
                })
            };
        });
    }

    render() {
        return <div >
            <Title title={'PhotoWall'} />
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
        </div>
    }
}

export default Main;