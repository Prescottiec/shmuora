import React from 'react';
import { Link } from "react-router-dom";
import CommentIndex from "../comments/comment_index";
// import CommentForm from "../comments/comment_form";

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: "",
            comment: this.props.comment ? this.props.comment : "",
            currentUserCommentId: "",
            // edit: false
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditComment = this.handleEditComment.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
        this.props.fetchComments(this.props.postId);
    }

    handleComments(){
        this.props.fetchComments(this.props.postId).then(
            (action) => {
                console.log(action.post);
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

    handleEditComment(){
        this.props.updateComment(
            {
                body: this.state.commentBody,
                id: this.state.currentUserCommentId
            }
        ).then(
            () => {
                this.handleComments();
            }
        );
    }

    handleSubmit(){
        this.props.createComment(
            {
                body: this.state.comment,
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
                    <div className="comment-line"></div>
                    <div className="comment-form">
                        <input className="comment-form-textarea" placeholder="Write your comment" value={this.state.comment} onChange={this.handleUpdate}></input>                                    
                        <div className="comment-form-buttons">
                            <button className="comment-create-button" onClick={()=>this.handleSubmit()}>Submit</button>
                        </div>
                    </div>
                    <div className="comment-list-items">
                        <ul className="comment-body">
                            {commentList}
                        </ul>
                    </div>
                    
                </div>
            )

    }
}

export default PostShow;
