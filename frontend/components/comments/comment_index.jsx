import React from 'react';
import { Link } from "react-router-dom";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment
    }

    render() {
        const comment = this.props.comment;
        if (!comment) {
            return (
                <div></div>
            )
        }
    
        return(
            <div className="list-items">
                <div className="comment-index">
                    { comment.body }
                </div>
            </div>
        )
    }
}

export default CommentIndex;