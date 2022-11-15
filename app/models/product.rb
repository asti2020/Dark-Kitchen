class Product < ApplicationRecord
   belongs_to :cart 
   belongs_to :order 
   belongs_to :cartline 
   belongs_to :user
end
