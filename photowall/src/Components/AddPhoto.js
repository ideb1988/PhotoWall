import React, { Component } from 'react';
import Title from './Title';


class AddPhoto extends Component {

    constructor(){
        super();
        this.handleAddPhoto=this.handleAddPhoto.bind(this);
    }

    handleAddPhoto(event){
        event.preventDefault();

        const imgURL = event.target.elements.link.value;
        const imgDesc = event.target.elements.desc.value;
        const post={
             id: 0,
             description: imgDesc,
             imageLink: imgURL
        };
        if (imgURL && imgDesc){
            this.props.onAddPhoto(post);
        }
        
    }

    render() {
        return (
            <div>
                <Title title={'PhotoWall: Add Photos'} />
                <div className='form'>
                <form onSubmit={this.handleAddPhoto}>
                    <input name='link' type='text' placeholder='Photo Link'/>
                    <input name='desc' type='text' placeholder='Description'/>
                    <button className='button'> Add Photo </button>
                </form>
                </div>
            </div>
        )
    }
}


export default AddPhoto;