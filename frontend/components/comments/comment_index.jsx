import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){

        if (!this.props.user) {
            return(
                <div></div>
            )
        };

        return (
            <div className="post-index">
            </div>
        )
    }
}

export default CommentIndex;