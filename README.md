# Dark Kitchen (Phase 4 React/Rails API Project)

## The App

Tired of crowded grocery stores? The constant search for new recipes? The endless dirty dishes taking over your sink? 

Sure, you could go out. But there's so many people out there. Maybe order in? Except Grubhub raised their fees, again! 

What now? 

Welcome to the **Dark Kitchen**, where users can purchase a variety of affordable home-cooked meals from local home chefs! Now you can enjoy homemade breakfasts, lunches, dinners, and desserts delivered right to your door. No hassle, no questionable Tasty recipes, no inflated fees--_and no dirty dishes_. 

Create a profile, browse the many options, add them to your cart, and get ready for a delicious home-cooked meal--without having to do it yourself! 

## Features

Users are able to make a profile and log in as either a "Chef" or a Customer with a username and password. As Chef, they are able to create, read, update, and delete food listings. Customers can view all of the food offerings, add them to a shopping cart, remove items from their shopping cart, and view their order history. 

## The Technical Stuff

- Chefs have the full CRUD capabilities in creating profiles and creating, reading, updating, and deleting food listings. Customers have partial CRUD capabilies in being able to read listings and their order history (read), adding and removing items in their cart (post and delete), and creating new profiles (post). 

As a react-rails app, this project uses React for the front end and a Rails API for the backend:

- The API contains several tables, including a User table (where a type will determine whether the user is a Chef), a Products table (listing all of the foods), and Order table joining the user and products table. There is also a Cart and Cart_Lines table for the shopping cart, connected to Orders, Products, and Users. 

- The front end has four different client side routes: a Homepage, Login Page, a Profile Page, and the Listings page. These are accessed through icons on a naviagtion bar, which also features a (controlled form) Searchbar. 

Additionally, the app has authentication and authorization capacbilities through the login page: users need a username and password to access their profiles. 
