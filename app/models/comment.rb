# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  body        :string           not null
#  user_id     :integer          not null
#  post_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Answer < ApplicationRecord

    validates :body, :user_id, :post_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post
	
end
