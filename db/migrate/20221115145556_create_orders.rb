class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.string :name
      t.string :email_address
      t.integer :address
      t.string :pay_method
      t.boolean :complete
      t.float :total_price

      t.timestamps
    end
  end
end
