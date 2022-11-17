class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.belongs_to :product
      t.integer :quantity
      t.belongs_to :cart, null: false, foreign_key: true
      t.timestamps
    end
  end
end
