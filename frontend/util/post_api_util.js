export const fetchPosts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/posts/'
    })
)

export const fetchPost = (postId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}`,
        data: { postId }
    })
}

export const createPost = (post) => {
    return $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: { post }
    })
}

export const updatePost = (post) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/posts/${post.id}`,
        data: { post }
    })
)

export const deletePost = (postId) => (
    $.ajax({
        method: "DELETE",
        url: `api/posts/${postId}`,
        data: { postId }
    })
)