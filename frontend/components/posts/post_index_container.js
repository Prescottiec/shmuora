import { fetchPosts } from "../../actions/post_actions"
import { connect } from "react-redux";
import PostIndex from "./post_index";

const mapStateToProps = state => {
    return {
        posts: Object.values(state.entities.posts)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);