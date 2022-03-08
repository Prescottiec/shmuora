export const fetchComments = (post_id) => (
    $.ajax({
        method: 'GET',
        url: '/api/comments',
        data: { comment: {post_id} }
    })
)

export const fetchComment = (commentId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/comments/${commentId}`,
        data: { commentId }
    })
}

export const createComment = (comment) => {
    return $.ajax({
        method: "POST",
        url: "api/comments/",
        data: { comment }
    })
}

export const updateComment = (comment) => {
    return $.ajax({
        method: "PATCH",
        url: `api/comments/${comment.id}`,
        data: { comment }
    })
}

export const deleteComment = (commentId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/comments/${commentId}`,
        data: { comment: { commentId } }
    })
}