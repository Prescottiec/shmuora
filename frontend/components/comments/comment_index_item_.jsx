import React from 'react';
import { Link } from "react-router-dom";

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: "",
            comment: this.props.comment,
            currentUserCommentId: ""
        };
        console.log(this.props);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    componentDidMount() {
        // this.props.fetchPost(this.props.postId);
        this.props.fetchComments(this.props.postId);
    };

    handleDeleteComment(){
        console.log("hello", this.state)
        this.props.deleteComment(this.state.comment.id).then(
            () => {
                this.setState({currentUserCommentId: ""});
                this.handleComments();
            }
        )
    }

    handleComments(){
        this.props.fetchComments(this.props.postId).then(
            (action) => {
                // console.log(action.post);
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

    render() {
        const comment = this.props.comment;
        if (!comment) {
            return (
                <div></div>
            )
        }
    
        return(
            <div className="list-items">
                <div className="comment-index">
                    { comment.body }
                    {
                        comment.user_id === this.props.currentUserId ? <div className="delete-button-block">
                            <button className="comment-delete-button" onClick={()=>this.handleDeleteComment()}>Delete</button>
                        </div> : ""
                    }
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;