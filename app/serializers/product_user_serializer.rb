class ProductUserSerializer < ActiveModel::Serializer
  attributes :id, :full_name
  has_one :product

end
