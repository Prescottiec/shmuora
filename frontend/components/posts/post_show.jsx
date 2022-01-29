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
        // const comment = this.props.comment;
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
                        {/* {comment.body} */}
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
    }
}

export default PostShow;
