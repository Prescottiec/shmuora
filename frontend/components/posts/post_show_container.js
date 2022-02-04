import { fetchPost, deletePost } from "../../actions/post_actions"
import { fetchComments, createComment, updateComment, deleteComment } from '../../actions/comment_actions';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostShow from "./post_show";

const mapStateToProps = (state, ownProps) => {
    let postId = ownProps.match.params.postId;
    return {
        post: state.entities.posts[postId],
        posts: Object.values(state.entities.posts),
        comments: Object.values(state.entities.comments),
        // comment: state.entities.posts[postId].comment,
        postId: postId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        deletePost: (postId) => dispatch(deletePost(postId)),
        fetchComments: (postId) => dispatch(fetchComments(postId)),
        createComment: (comment) => dispatch(createComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostShow));