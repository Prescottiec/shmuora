import React from 'react';
import { Link } from "react-router-dom";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment
    }

    // componentDidMount() {
    //     this.props.fetchPost(this.props.postId);
    //     this.props.fetchComments(this.props.postId);
    // }

    render() {
        const comment = this.props.comment;
        if (!comment) {
            return (
                <div></div>
            )
        }
    
        // console.log(this.props.posts);
        // const list = comments.map(comment => (
        //     <CommentIndexItem
        //     comment={comment}
        //     key={`${comment.id}`}/>
        // ));
    
        return(
            <div className="post-index-splash">
                <div className="post-index-list">
                    { comment.body }
                </div>
            </div>
        )
    }
}

export default CommentIndex;