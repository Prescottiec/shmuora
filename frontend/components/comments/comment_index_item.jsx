import React from "react";
import { Link } from "react-router-dom";

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.post;
    }
    
    render() {
        const comment = this.props.post.comment;
        if (!comment) {
            return(
                <div></div>
            )
        };
        return(
            <div className="list-items">
                <div className="post-title">
                    <Link to={`/posts/${post.id}`}>{comment.body}</Link>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;