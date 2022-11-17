class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  # belongs_to :cart
  # belongs_to :product
end
