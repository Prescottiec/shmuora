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
        return(
            <div>
                <Link to="/posts/post/:postId">Click here to the post</Link>
                {post.title}
                {post.body}
            </div>
        )
    }
}

export default PostShow;