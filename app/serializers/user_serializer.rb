class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :password, :user_type


  # has_many :products
  # has_many :carts 
  # has_many :orders
  
end
