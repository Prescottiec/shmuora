class Posts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :body
      t.timestamps
    end
    add_index :posts, :user_id
  end
end
