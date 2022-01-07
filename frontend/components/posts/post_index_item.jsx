import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.post;
    }
    
    render() {
        const post = this.props.post;
        return(
            <div className="list-items">
                <div className="post-title">
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </div>
                <div className="post-body">
                    {this.props.post.body}
                </div>
            </div>
        )
    }
}

export default PostIndexItem;