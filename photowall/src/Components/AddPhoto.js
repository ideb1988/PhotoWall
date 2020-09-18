import React, { Component } from 'react';

class AddPhoto extends Component {

    constructor() {
        super();
        this.handleAddPhoto = this.handleAddPhoto.bind(this);
    }

    handleAddPhoto(event) {
        event.preventDefault();

        const imgURL = event.target.elements.link.value;
        const imgDesc = event.target.elements.desc.value;
        const post = {
            id: 0,
            description: imgDesc,
            imageLink: imgURL
        };
        if (imgURL && imgDesc) {
            this.props.addPost(post);
            this.props.history.push('/');
        }

    }

    render() {
        return (
            <div>
                <div className='form'>
                    <form onSubmit={this.handleAddPhoto}>
                        <input name='link' type='text' placeholder='Photo Link' />
                        <input name='desc' type='text' placeholder='Description' />
                        <button className='button'> Add Photo </button>
                    </form>
                </div>
            </div>
        )
    }
}


export default AddPhoto;