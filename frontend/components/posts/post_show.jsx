import React from 'react';
import { Link } from "react-router-dom";
import CommentIndex from "../comments/comment_index";

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
        const commentList = comments.map(comment => (
            <CommentIndex
            comment={comment}
            key={`${comment.id}`}/>
        ));
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
                        </div>
                        <div className="post-body">
                            {post.body}
                        </div>
                        <div className="post-title">
                            {commentList}
                        </div>
                        <div className="post-title">
                            {/* <CommentForm/> */}
                        </div>
                    </div>

                </div>
            )
        // if (comments.length === 0) {
        //     return(
        //         <div className="post-show-page">
        //             <div className="list-items">
        //                 <div className="post-title">
        //                     {post.title}
        //                     {/* {comment.body} */}
        //                 </div>
        //                 <div className="post-body">
        //                     {post.body}
        //                 </div>
        //                 <p>No comments yet</p>
        //                 <div className="post-title">
        //                     {/* <CommentForm/> */}
        //                 </div>
        //             </div>

        //         </div>
        //     )
        // } else {
        //     return(
        //         <div className="post-show-page">
        //             <div className="list-items">
        //                 <div className="post-title">
        //                     {post.title}
        //                     {comment.body}
        //                 </div>
        //                 <div className="post-body">
        //                     {post.body}
        //                 </div>
        //                 <div className="post-title">
        //                     {/* <CommentForm/> */}
        //                 </div>
        //             </div>

        //         </div>
        //     )
        // };

    }
}

export default PostShow;
