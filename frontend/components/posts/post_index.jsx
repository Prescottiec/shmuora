import React from 'react';
import PostIndexItem from "./post_index_item";
import CommentIndex from "../comments/comment_index";
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
        const postList = posts.map(post => (
            <PostIndexItem
            post={post}
            key={`${post.id}`}/>
        ));

        const comments = this.props.comments;
        // const commentList = comments.map(comment => (
        //     <CommentIndex
        //     comment={comment}
        //     key={`${comment.id}`}/>
        // ));
    
        return(
            <div className="post-index-splash">
                <div className="post-index-list">
                <Link to='/postsnew' className="ask-question">What do you want to ask or share?</Link>
                    <ul className="post-list">
                        { postList }
                    </ul>   
                    <ul className="post-list">
                        {/* { commentList } */}
                    </ul> 
                </div>
            </div>
        )
    }
}

export default PostIndex;