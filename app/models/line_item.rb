class LineItem < ApplicationRecord
    belongs_to :product
    belongs_to :cart
    belongs_to :order
  
    # LOGIC
    def total_price
      self.quantity * self.product.price
    end
end

#join tale between products and carts
# each line of an order in the cart 
# do I need more code so lines can merge if multiples of the same product are added to the cart?
  
