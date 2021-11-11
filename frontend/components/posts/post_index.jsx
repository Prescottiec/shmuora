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
                <div className="post-index-list">
                    {/* <li className="post-link"> */}
                        {/* <Link className="post-item-link" to={"/posts/"+post.id}>{post.body}</Link> */}
                    {/* </li> */}
                    <ul className="post-list">
                        { list }
                    </ul>   
                </div>
            </div>
        )
    }
}

export default PostIndex;