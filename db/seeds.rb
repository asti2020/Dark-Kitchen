puts "Seeding database..."


User.create(full_name: "Adm", username: "admin", email: "admin@gmail.com", password: "admin123", user_type: "chef")
User.create(full_name: "Astika", username: "admin", email: "astika@gmail.com", password: "123admin", user_type: "order")
User.create(full_name: "mariya", username: "admin", email: "mariya@gmail.com", password: "123nbfhh", user_type: "order")


puts "Done seeding database."
