import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import SinglePhoto from './SinglePhoto';
import Title from './Title';
import { Route } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <div >
                <Title title={'PhotoWall'} />

                <Route exact path="/" render={() => {
                    return (
                        <PhotoWall {...this.props} />
                    )
                }} />

                <Route path="/AddPhoto" render={({ history }) => {
                    return (
                        <AddPhoto {...this.props} />
                    );
                }} />

                <Route path="/SinglePhoto/:id" render={(params) => {
                    return (
                        <SinglePhoto {...this.props} {...params} />
                    );
                }} />
            </div>
        )
    }

}

export default Main;