import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Title from './Title';
import { Route } from 'react-router-dom';

const posts = require('../Resourses/posts');

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }

    render() {
        return (
            <div >
                <Route exact path="/" render={() => {
                    return (
                        <div>
                            <Title title={'PhotoWall'} />
                            <PhotoWall posts={this.state.posts}
                                onRemovePhoto={this.removePhoto} />
                        </div>
                    )
                }} />

                <Route path="/AddPhoto" render={({history}) => {
                    return (
                        <div>
                            <AddPhoto onAddPhoto={(addedPost) => {
                                this.addPhoto(addedPost);
                                history.push('/');
                            }} />
                        </div>
                    );
                }} />
            </div>
        )
    }

    componentDidMount() {
        const data = fetchDataFromDB();
        this.setState(() => {
            return {
                posts: data
            };
        });
    }

    componentDidUpdate(previousState, currState) {

    }

    addPhoto(postAdded) {
        this.setState((state) => {
            return {
                posts: state.posts.concat([postAdded])
            };
        })

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


}

function fetchDataFromDB() {
    return posts;
}

export default Main;