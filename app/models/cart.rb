class Cart < ApplicationRecord
   has_many :cartlines, dependent: :destroy
   has_many :products
   # belongs_to :order
   # belongs_to :user

   def add_product(product)
      current_item = cartline.find_by(product_id: product.id)
  
      if current_item
        current_item.increment(:quantity)
      else
        current_item = cartline.build(product_id: product.id)
      end
      current_item
    end
  
    def total_price
      cartline.to_a.sum { |item| item.total_price }
    end
end
