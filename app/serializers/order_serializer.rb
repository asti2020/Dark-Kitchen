class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :complete, :total_price

  # belongs_to :user 
  # has_many :products
  # has_many :cartlines 
  # belongs_to :cart
end
