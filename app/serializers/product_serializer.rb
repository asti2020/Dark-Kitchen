class ProductSerializer < ActiveModel::Serializer
  attributes :id, :food_name, :price, :ingredient, :picture, :category
  # has_one :user, serializer: ProductUserSerializer
end
