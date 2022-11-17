class AddColumnCart < ActiveRecord::Migration[6.1]
  def change
    add_column :carts, :isActive, :boolean
  end
end
