import React from 'react';
// import CommentIndexItem from "./comment_index_item";
import { Link } from "react-router-dom";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.posts ? this.props.posts : []
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const comments = this.props.comments;
        if (!comments) {
            return (
                <div></div>
            )
        }
        // console.log(comment);
        // console.log(this.props.posts);
        // const list = comments.map(comment => (
        //     <CommentIndexItem
        //     comment={comment}
        //     key={`${comment.id}`}/>
        // ));
    
        return(
            <div className="post-index-splash">
                <div className="post-index-list">
                <Link to='/postsnew' className="ask-question">Ask a question!</Link>
                    {/* <ul className="post-list"> */}
                        {/* { list } */}
                    {/* </ul>    */}
                </div>
            </div>
        )
    }
}

export default CommentIndex;