class ProductSerializer < ActiveModel::Serializer
  attributes :id, :food_name, :price, :ingredient, :picture, :category, :user_id

end
