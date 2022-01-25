import { fetchPost, deletePost } from "../../actions/post_actions"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostShow from "./post_show";

const mapStateToProps = (state, ownProps) => {
    let postId = ownProps.match.params.postId;
    return {
        post: state.entities.posts[postId],
        posts: Object.values(state.entities.posts),
        // comment: state.entities.posts[postId].comment,
        postId: postId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        deletePost: (postId) => dispatch(deletePost(postId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostShow));