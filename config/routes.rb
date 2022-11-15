Rails.application.routes.draw do
  
  resources :orders
  resources :products
  resources :users, only: [:create]
  get '/me', to: "users#me"
  post '/auth/login', to: "auths#login"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!