class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :complete, :total_price
end
