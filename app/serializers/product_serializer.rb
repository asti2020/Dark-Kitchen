class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :ingredients, :allergens, :description, :category, :calories, :image_url


  # belongs_to :cart 
  #  belongs_to :order 
  #  belongs_to :cartline 
  #  belongs_to :user
end
