class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :order_status
      t.string :address
      t.string :phone
      t.boolean :avilable

      t.timestamps
    end
  end
end
