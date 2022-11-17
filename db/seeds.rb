puts "Seeding database..."


user1= User.create(full_name: "Adm", username: "admin", email: "admin@gmail.com", password: "admin123", user_type: "chef")
user2 =User.create(full_name: "Astika", username: "astika", email: "astika@gmail.com", password: "astika123", user_type: "order")
user3 =User.create(full_name: "mariya", username: "admin", email: "mariya@gmail.com", password: "123nbfhh", user_type: "order")


product1=Product.create(food_name:"Rice", price:5.99, ingredient:"Rice is a staple food in many cultures, especially in Asia.", category:"Break-Fast", user_id:1, picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUu_EhJWLEUW3U0bhPwHPHn8dibqAPCQaWSw&usqp=CAU")


cart1=Cart.create(user_id:user2.id)

order1=Order.create(user_id:user2.id, order_status:"pending", address:"1234", phone:"1234567890", avilable:true)
order2=Order.create(user_id:user3.id, order_status:"pending", address:"1234", phone:"1234567890", avilable:true)

cart_item1=CartItem.create(product_id:product1.id, quantity:1, cart_id:cart1.id)

# order_item1=OrderItem.create(price:product1.price, quantity:1, order_id:order1.id, product_id:product1.id)

puts "Done seeding database."


