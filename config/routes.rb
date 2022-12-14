Rails.application.routes.draw do
  # namespace :api do
      resources :cart_items, only: [:index, :show, :create, :update]
      resources :orders
      resources :order_states, only: [:index]
      resources :carts, only: [:index, :create, :update, :destroy]
      resources :products, only: [ :index, :create, :update, :destroy, :show ]
      # get '/products', to: 'products#index'
      get '/users/:id/products', to: 'users#userProduct'
      resources :users, only: [:create]
      get '/profile', to: "users#profile"
      get '/me', to: "users#me"
      post '/auth/login', to: "auths#login"
      post 'products/add_to_cart/:id', to: 'products#add_to_cart'
  # end
      # destroy 'products/remove_from_cart/:id', to: 'products#remove_from_cart'
      get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
    end



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!