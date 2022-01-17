import React from 'react';
import CommentIndexItem from "./comment_index_item";
// import { Link } from "react-router-dom";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const comments = this.props.post.comments;
        const list = comments.map(comment => (
            <CommentIndexItem
            comment={comment}
            key={`${comment.id}`}/>
        ));
    
        return(
            <div className="post-index-splash">
                <div className="post-index-list">
                {/* <Link to='/postsnew' className="ask-question">Ask a question!</Link> */}
                    <ul className="post-list">
                        { list }
                    </ul>   
                </div>
            </div>
        )
    }
}

export default CommentIndex;