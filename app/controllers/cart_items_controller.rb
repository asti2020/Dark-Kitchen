class CartItemsController < ApplicationController
    def index
        cart_items = CartItem.all
        render json: cart_items, status: :ok
    end
    def create
        user = User.find(current_user.id)
        carts = Cart.find_by(user_id: current_user.id)
        cartitem = CartItem.create(cart_id:carts.id, product_id: params[:product_id])
        render json: cartitem, status: :created
end

# User.second.carts.first.products
end
