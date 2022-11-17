class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_status, :address, :phone, :avilable
  belongs_to :user
end
