class CreateCartlines < ActiveRecord::Migration[6.1]
  def change
    create_table :cartlines do |t|
      t.integer :cart_id
      t.integer :order_id
      t.integer :product_id
      t.integer :quantity, default: 1
      t.float :total_price

      t.timestamps
    end
  end
end
