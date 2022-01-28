# json.array! @comments do |comment|
#     json.extract! comment , :id, :body, :post_id
# end

@comments.each do |comment|
    # json.set! comment.id do
        json.partial! '/api/comments/comment', comment: comment
    # end
end