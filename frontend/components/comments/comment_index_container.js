import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state) => {
    return {
        posts: state.entities.posts
        // comments: state.entities.posts.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchComments: () => dispatch(fetchComments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);