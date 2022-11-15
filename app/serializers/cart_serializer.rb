class CartSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :product_id

  # has_many :cartlines, dependent: :destroy
  # has_many :products 
  # belongs_to :order
  # belongs_to :user
end
