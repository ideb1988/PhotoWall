import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import Title from './Title';

const posts = require('../Resourses/posts');

class Main extends Component {
    render() {
        return <div >
            <Title title={'PhotoWall'} />
            <PhotoWall posts={posts}/>
        </div>
    }
}

export default Main;