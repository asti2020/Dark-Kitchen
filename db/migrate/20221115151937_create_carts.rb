class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :order_id
      t.integer :user_id

      t.timestamps
    end
  end
end
