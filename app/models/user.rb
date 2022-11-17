class User < ApplicationRecord
    has_secure_password
    validates :full_name, presence: true, length: { maximum: 20 }
    validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }, uniqueness: true
    validates :password, presence: true, length: { minimum: 6 }, allow_nil: true
    validates :user_type, presence: true, inclusion: { in: %w(chef order) }
    has_many :products
    # has_one :carts
    has_many :orders
    # has_many :cart_items, through: :carts

end