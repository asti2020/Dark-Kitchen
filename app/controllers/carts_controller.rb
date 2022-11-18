class CartsController < ApplicationController
    def index
        carts = Cart.all
        render json: carts, status: :ok
    end
end
