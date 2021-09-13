import { fetchPost } from "../../actions/post_actions"
import { connect } from "react-redux";
import PostShow from "./post_show";

const mapStateToProps = state => {
    return {
        post: Object.values(state.entities.post)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);