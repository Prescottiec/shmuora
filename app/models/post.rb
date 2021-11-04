class Post < ApplicationRecord
    validates :user_id, presence: true 
    validates :title, uniqueness: { scope: [:user_id] }

    belongs_to :user, primary_key: :id, foreign_key: :user_id, class_name: :User
end
