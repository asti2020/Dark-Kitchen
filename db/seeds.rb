puts "Seeding database..."


User.create(full_name: "Adm", username: "admin", email: "admin@gmail.com", password: "admin123", user_type: "chef")
User.create(full_name: "Astika", username: "astika", email: "astika@gmail.com", password: "astika123", user_type: "order")
User.create(full_name: "mariya", username: "admin", email: "mariya@gmail.com", password: "123nbfhh", user_type: "order")


Product.create(food_name:"Rice", price:5.99, ingredient:"Rice is a staple food in many cultures, especially in Asia.", category:"Break-Fast", user_id:1, picture:"is picture")

puts "Done seeding database."


