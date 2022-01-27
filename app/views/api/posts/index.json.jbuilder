# @posts.each do |post|
#     json.set! post.id do
#         json.partial! "/api/posts/post", post: post
#     end
# end

json.array! @posts do |post|
    json.extract! post, :id, :title, :body, :user_id
end