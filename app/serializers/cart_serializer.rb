class CartSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :product_id
end
