import React from 'react';
// import CommentIndexItem from "./comment_index_item";
import { Link } from "react-router-dom";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.comments
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
        this.props.fetchComments(this.props.postId);
    }

    render() {
        const comments = this.props.comments;
        if (!comments) {
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