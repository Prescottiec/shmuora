class User < ApplicationRecord
    validates :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :posts, dependent: :destroy

    has_many :comments,
        foreign_key: :user_id,
        class_name: :Comment

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end
end
