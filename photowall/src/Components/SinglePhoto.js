import { waitForElement } from '@testing-library/react';
import React, { Component } from 'react';
import Photo from './Photo';

class SinglePhoto extends Component {
    render() {
        const { match, posts } = this.props;
        const id = match.params.id;
        const post = posts.find((post) => post.id === id);
        
        const element = (
            <div className='single-photo'>
                <Photo post={post} />
                

            </div>
        );

        return element;
    }
}

export default SinglePhoto;
