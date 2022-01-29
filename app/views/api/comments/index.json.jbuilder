# json.array! @comments do |comment|
#     json.extract! comment , :id, :body, :post_id
# end

@comments.each do |comment|
    json.partial! '/api/comments/comment', comment: comment
end