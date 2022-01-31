import React from 'react';
import { Link } from "react-router-dom";
import CommentForm from "../comments/comment_form";

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
        this.props.fetchComments(this.props.postId);
    }

    render() {
        const post = this.props.post;
        const comments = this.props.comments;
        console.log(comments);
        // const comment = comments.map(comment)
        if (!post) {
            return(
                <div></div>
            )
        };
        
        if (comments.length === 0) {
            return(
                <div className="post-show-page">
                    <div className="list-items">
                        <div className="post-title">
                            {post.title}
                            {/* {comments.body} */}
                        </div>
                        <div className="post-body">
                            {post.body}
                        </div>
                        <p>No comments yet</p>
                        <div className="post-title">
                            {/* <CommentForm/> */}
                        </div>
                    </div>

                </div>
            )
        } else {
            return(
                <div className="post-show-page">
                    <div className="list-items">
                        <div className="post-title">
                            {post.title}
                            {/* {comments.body} */}
                        </div>
                        <div className="post-body">
                            {post.body}
                        </div>
                        <div className="post-title">
                            {/* <CommentForm/> */}
                        </div>
                    </div>

                </div>
            )
        };

    }
}

export default PostShow;
