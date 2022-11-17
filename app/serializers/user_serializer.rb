class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :user_type
  has_many :products 
  # has_many :carts
  # has_many :orders
  # has_many :cart_items
end
