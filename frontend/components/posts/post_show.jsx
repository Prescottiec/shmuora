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
                {/* <Link to={`/posts/${post.id}/edit`}>Click here to the post</Link> */}
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                {post.title}
                {post.body}
            </div>
        )
    }
}

export default PostShow;