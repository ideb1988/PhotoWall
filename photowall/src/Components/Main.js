import React, { Component } from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import Title from './Title';
import { Route } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <div >
                <Route exact path="/" render={() => {
                    return (
                        <div>
                            <Title title={'PhotoWall'} />
                            <PhotoWall {...this.props} />
                        </div>
                    )
                }} />

                <Route path="/AddPhoto" render={({ history }) => {
                    return (
                        <AddPhoto {...this.props} onHistory={history} />
                    );
                }} />
            </div>
        )
    }
   
}

export default Main;