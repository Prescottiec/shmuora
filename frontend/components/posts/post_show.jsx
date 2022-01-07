import React from 'react';
import { Link } from "react-router-dom";

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    render() {
        const post = this.props.post;
        if (!post) {
            return(
                <div></div>
            )
        };
        return(
            <div className="post-show-page">
                <div className="list-items">
                    <div className="post-title">
                        {post.title}
                    </div>
                    <div className="post-body">
                        {post.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostShow;