import React from 'react';
import { Link } from "react-router-dom";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment

        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchPost(this.props.postId);
    //     this.props.fetchComments(this.props.postId);
    // };

    handleDeleteComment(){
        this.props.deleteComment(this.state.currentUserCommentId).then(
            () => {
                this.setState({currentUserCommentId: ""});
                this.handleComments();
            }
        )
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
                        comment.user_id === this.props.currentUserId ? <div>
                            <button className="post-delete-button" onClick={()=>this.handleDeleteComment()}>Delete</button>
                        </div> : ""
                    }
                </div>
            </div>
        )
    }
}

export default CommentIndex;