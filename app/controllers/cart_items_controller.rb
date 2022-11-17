class CartItemsController < ApplicationController
    def index
        cart_items = CartItem.all
        render json: cart_items, status: :ok
    end
end
