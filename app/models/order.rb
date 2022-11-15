class Order < ApplicationRecord
    belongs_to :user 
    has_many :products
    has_many :cartlines 
    belongs_to :cart
end
