class Product < ApplicationRecord
   belongs_to :cart, optional: true
   belongs_to :order, optional: true 
   belongs_to :cartline, optional: true 
   belongs_to :user, optional: true
end
