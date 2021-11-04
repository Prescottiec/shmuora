import { fetchPost } from "../../actions/post_actions"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostShow from "./post_show";

const mapStateToProps = (state, ownProps) => {
    let postId = ownProps.match.params.postId;
    return {
        post: state.entities.posts[postId],
        postId: postId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostShow));