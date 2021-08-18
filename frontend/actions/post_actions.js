import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = (postId) => {
    return {
        type: REMOVE_POST,
        postId
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        return PostAPIUtil.fetchPosts().then((posts)=>{
                return dispatch(receivePosts(posts))
            }
        );
    }
}

export const fetchPost = (postId) => {
    return (dispatch) => {
        return PostAPIUtil.fetchPost(postId).then((post)=>{
                return dispatch(receivePost(post))
            }
        );
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        return PostAPIUtil.createPost(post).then((post)=>{
                return dispatch(receivePost(post))
            }
        );
    }
}

export const updatePost = (post) => {
    return (dispatch) => {
        return PostAPIUtil.updatePost(post).then((post)=>{
                return dispatch(receivePost(post))
            }
        );
    }
}

export const deletePost = (postId) => {
    return (dispatch) => {
        return PostAPIUtil.deletePost(postId).then(()=>{
                return dispatch(removePost(postId))
            }
        );
    }
}