import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createComment, updateComment, deleteComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mapStateToProps = (state, ownProps) => {
    let isEdit = false;
    let post = { title: "", body: "" };
    let postId = null;
    if (ownProps.match.path === `/posts/${postId}/edit`) {
        postId = ownProps.match.params.postId;
        isEdit = true;
        post = state.entities.posts[postId]
    };
    return {
        user_id: state.session.id,
        post: post,
        postId: postId,
        isEdit: isEdit
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        createComment: (comment) => dispatch(createComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));