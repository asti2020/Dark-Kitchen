class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :password, :user_type
end
