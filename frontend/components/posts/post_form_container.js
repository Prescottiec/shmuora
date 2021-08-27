import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPost, updatePost, createPost } from "../../util/post_api_util";
import PostForm from "./post_form";

const mapStateToProps = (state, ownProps) => {
    let isEdit = false;
    let post = { title: "", body: "" };
    let postId = null;
    if (ownProps.match.path === "/posts/:postId/edit") {
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
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        createPost: (post) => dispatch(createPost(post)),
        updatePost: (post) => dispatch(updatePost(post))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));