class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :ingredients, :allergens, :description, :category, :calories, :image_url
end
