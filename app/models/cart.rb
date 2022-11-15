class Cart < ApplicationRecord
   has_many :cartlines, dependent: :destroy
   has_many :products
   # belongs_to :order
   # belongs_to :user
end
