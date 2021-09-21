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
        console.log(post);
        if (!post) {
            return(
                <div></div>
            )
        };
        return(
            <div>
                <Link to="/posts/:postId/edit">Click here to the post</Link>
                {post.title}
                {post.body}
            </div>
        )
    }
}

export default PostShow;