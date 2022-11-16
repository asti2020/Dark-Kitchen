Rails.application.routes.draw do
  
  resources :products, only: [ :index, :create, :update, :destroy, :show ]
  # get '/products', to: 'products#index'
  get '/users/:id/products', to: 'users#userProduct'
  resources :users, only: [:create]
  get '/profile', to: "users#profile"
  get '/me', to: "users#me"
  post '/auth/login', to: "auths#login"
  post 'products/add_to_cart/:id', to: 'products#add_to_cart'
  destroy 'products/remove_from_cart/:id', to: 'products#remove_from_cart'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!