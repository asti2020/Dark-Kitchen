class CreateCartlines < ActiveRecord::Migration[6.1]
  def change
    create_table :cartlines do |t|
      t.integer :order_id
      t.integer :product_id
      t.integer :quantity
      t.float :total_price

      t.timestamps
    end
  end
end
