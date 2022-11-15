class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.integer :quantity
      t.string :ingredients
      t.string :allergens
      t.text :description
      t.string :category
      t.integer :calories
      t.string :image_url

      t.timestamps
    end
  end
end
