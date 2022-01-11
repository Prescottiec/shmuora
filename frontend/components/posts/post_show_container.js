import { fetchPost, deletePost } from "../../actions/post_actions"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostShow from "./post_show";
import { createComment, updateComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    let postId = ownProps.match.params.postId;
    return {
        post: state.entities.posts[postId],
        postId: postId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        deletePost: (postId) => dispatch(deleteQuestion(postId)),
        createComment: (comment) => dispatch(createComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostShow));