// import { connect } from 'react-redux';
// import { fetchPost } from '../../actions/post_actions';
// import { fetchComments } from '../../actions/comment_actions';
// import CommentIndex from './comment_index';

// const mapStateToProps = (state, ownProps) => {
//     let postId = ownProps.match.params.postId;
//     return {
//         post: state.entities.posts[postId],
//         posts: Object.values(state.entities.posts),
//         postId: postId,
//         comments: Object.values(state.entities.comments)
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchPost: (postId) => dispatch(fetchPost(postId)),
//         fetchComments: (postId) => dispatch(fetchComments(postId))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);