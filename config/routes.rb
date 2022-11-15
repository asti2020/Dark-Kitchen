Rails.application.routes.draw do
  
  resources :products, only: [ :index, :create, :update, :destroy ]
  # get '/products', to: 'products#index'
  resources :users, only: [:create]
  get '/profile', to: "users#profile"
  get '/me', to: "users#me"
  post '/auth/login', to: "auths#login"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!