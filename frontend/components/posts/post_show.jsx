import React from 'react';
// import PostShow from "./post_show";
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
                <Link to="/posts/new">Create a post!</Link>
                <div>
                    {
                        posts.map(post => (
                            <PostIndexItem
                            post={post}
                            key={`${post.id}`}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default PostShow;