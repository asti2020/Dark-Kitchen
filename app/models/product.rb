class Product < ApplicationRecord
   belongs_to :cart, optional: true
   belongs_to :order, optional: true 
   has_many :cartlines, optional: true 
   belongs_to :user, optional: true
end
