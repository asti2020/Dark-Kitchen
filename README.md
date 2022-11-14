# Phase 4 React/Rails API Project

## Description

We will be creating a dark kitchen react-rails app. Users will be able to log in as either a "Chef" or a "User." A Chef will have full CRUD capabilities, being able to create, read, update, and delete food (product) listings. Users will have partial crud capabilities: the ability to read listings, and create reviews. 

## Requirements

As a react-rails app, this projecty will use React for the front end and a Rails API for the backend:

- The API will contain several tables: A user table (where a boolean will determine whether the user is a Chef), a products table (listing all of the foods), and an order table. The User and Products table will have a many-to-many relationship through the Order table. 

- The front end will have at least three different client side routes (accessed through a navigation bar), including Login, Homepage, and Listings pages. 

Additionally, the app will have authentication/authorization capacbilities through the login page. 

## Stretch Goals
As a stretch goal, we hope to implement a working cart for non-chef users to place orders. This will require an additional table joining the Users and Orders tables. 

Additionally, we want to give non-chef users the ability to edit and delete their reviews through a form in the reviews section. 

