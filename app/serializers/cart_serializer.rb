class CartSerializer < ActiveModel::Serializer
  attributes :id, :isActive
  belongs_to :user
  has_many :products
  # has_many :orders
  # has_many :cart_items
end
