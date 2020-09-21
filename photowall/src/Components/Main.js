import React, { Component } from 'react'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
import SinglePhoto from './SinglePhoto'

class Main extends Component {
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        return (

            <div>
                <h1>
                    <Link to="/"> Photowall </Link>
                </h1>
                <Route exact path="/" render={() => (
                    <div>
                        <PhotoWall {...this.props} />
                    </div>
                )} />
                <Route path="/AddPhoto" render={({ history }) => (
                    <AddPhoto {...this.props} onHistory={history} />
                )} />
                <Route path="/single/:id" render={(params) => (
                    <SinglePhoto {...this.props} {...params} />
                )} />
            </div>
        )
    }
}

export default Main