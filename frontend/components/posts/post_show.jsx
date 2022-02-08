import React from 'react';
import { Link } from "react-router-dom";
import CommentIndex from "../comments/comment_index";
// import CommentForm from "../comments/comment_form";

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            comment: this.props.comment ? this.props.comment : "",
            currentUserCommentId: "",
            commentBody: ""
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
        this.props.fetchComments(this.props.postId);
    }

    handleComments(){
        this.props.fetchPost(this.props.postId).then(
            (action) => {
                let userComment = action.post.comments.find( (comment) => comment.user_id === this.props.currentUserId )

                this.setState(
                    {
                        post: action.post,
                        currentUserCommentId: userComment ? userComment.id : "",
                        commentBody: userComment ? userComment.body : ""
                    }
                );
            }
        );
    }

    handleSubmit(){
        this.props.createComment(
            {
                body: this.state.commentBody,
                post_id: this.props.postId
            }
        ).then(
            () => {
                this.handleComments();
            }
        )
    }

    handleCreateComment(){
        this.props.createComment(
            {
                body: this.state.commentBody,
                post_id: this.props.postId
            }
        ).then(
            () => {
                this.handleComments();
            }
        )
    }

    handleUpdate(e) {
        this.setState({
            comment: e.currentTarget.value
        })
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
        // console.log(post);
        return(
                <div className="post-show-page">
                    <div className="list-items">
                        <div className="post-title">
                            {post.title}
                        </div>
                        <div className="post-body">
                            {post.body}
                        </div>
                    </div>
                    {/* <div className="post-title"> */}
                        {/* <CommentForm/> */}
                    {/* </div> */}

                    <div className="comment-form">
                        <textarea className="comment-form-textarea" placeholder="Write your comment" value={this.state.comment} onChange={this.handleUpdate}></textarea>                                    
                        <div className="comment-form-buttons">
                            <div>
                                <button className="comment-create-button" onClick={()=>this.handleSubmit()}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="list-items">
                        <ul className="comment-body">
                            {commentList}
                        </ul>
                    </div>
                    
                </div>
            )

    }
}

export default PostShow;
