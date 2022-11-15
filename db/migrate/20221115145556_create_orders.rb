class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :product_id
      t.boolean :complete
      t.float :total_price

      t.timestamps
    end
  end
end
