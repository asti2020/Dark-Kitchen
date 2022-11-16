class Cartline < ApplicationRecord
    belongs_to :product
    belongs_to :cart 
    # belongs_to :order
    # belongs_to :user

    def total_price
       product.price.to_i * quantity.to_i
      end

  #Will cartlines combine in the cart? Do I need another method somewhere?
end
