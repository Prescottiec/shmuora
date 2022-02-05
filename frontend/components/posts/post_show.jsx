import React from 'react';
import { Link } from "react-router-dom";
import CommentIndex from "../comments/comment_index";
// import CommentForm from "../comments/comment_form";

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
        this.props.fetchComments(this.props.postId);
    }

    handleUpdate(type) {
        return e => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
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
                    </div>
                    {/* <div className="post-title"> */}
                        {/* <CommentForm/> */}
                    {/* </div> */}

                    {/* <div className="comment-form">
                        <textarea className="comment-form-textarea" placeholder="Write your comment" value={this.state.comment.body} onChange={this.handleUpdate("commentBody")}></textarea>                                    
                        <div className="comment-form-buttons">
                            <div>
                                <button className="comment-create-button" onClick={()=>this.handleSubmit()}>Submit</button>
                            </div>
                        </div>
                    </div> */}

                    <ul className="comment-body">
                        {commentList}
                    </ul>
                    
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
