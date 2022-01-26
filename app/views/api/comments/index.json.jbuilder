json.array! @comments do |comment|
    json.extract! comment , :id, :body, :post_id
end