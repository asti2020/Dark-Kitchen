class Order < ApplicationRecord
    has_many :line_items, dependent: :destroy
    # has_many :products, through: :line_items
    # has_many :carts, through: :line_items
end


# stores the actual order information for checkout (total price, date, etc); is different from the cart, which holds orders 
