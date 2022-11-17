Rails.application.routes.draw do
  
  resources :orders
  #, only: [:index, :show, :new, :create]
  resources :carts
  #, only: [:index, :show, :destroy]
  # resources :line_items
  #, only: [:create, :add_quantity, :subtract_quantity, :destroy]
  resources :products
  #, only: [:index, :new, :create, :edit, :update, :destroy]
  resources :users
  #, only: [:create]

  get '/me', to: "users#me"
  post '/auth/login', to: "auths#login"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post 'line_items/:id/add' => "line_items#add_quantity", as: "line_item_add"
  post 'line_items/:id/reduce' => "line_items#reduce_quantity", as: "line_item_reduce"
  post 'line_items' => "line_items#create"
  get 'line_items/:id' => "line_items#show", as: "line_item"
  delete 'line_items/:id' => "line_items#destroy"
end



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!