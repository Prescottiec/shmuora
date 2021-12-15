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
    
        return(
            <div className="post-index-splash">
                <div className="post-index-list">
                    <ul className="post-list">
                        { list }
                    </ul>   
                </div>
            </div>
        )
    }
}

export default PostIndex;