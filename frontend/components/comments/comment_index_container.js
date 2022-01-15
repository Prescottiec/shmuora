import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state) =>{
    return {
        posts: Object.values(state.entities.posts),
        comments: Object.values(state.entities.posts.comments),
        user: Object.values(state.entities.users)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);