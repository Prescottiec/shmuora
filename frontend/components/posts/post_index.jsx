import React from 'react';
import PostIndexItem from "./post_index_item";
import { Link } from "react-router-dom";

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts;
        const list = posts.map(post => (
                            <PostIndexItem
                            post={post}
                            key={`${post.id}`}/>
                        ));
        // console.log(posts);
        return(
            <div className="post-index-splash">
                {/* <Link to="/posts/new">Create a post!</Link> */}
                <ul className="post-list">
                    { list }
                </ul>
            </div>
        )
    }
}
// github test
// new comment
export default PostIndex;