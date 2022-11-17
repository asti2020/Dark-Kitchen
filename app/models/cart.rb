class Cart < ApplicationRecord
    has_many :line_items, dependent: :destroy
    has_many :products, through: :line_items

  # LOGIC
  def sub_total
    sum = 0
    self.line_items.each do |line_item|
      sum+= line_item.total_price
    end
    return sum
  end
end


# Used to store the products that the user wants to purchase. 
# Stores LineItems before proceeding to checkout; a new instance must be created each time a new session occurs to keep track of added products throughout the app.
