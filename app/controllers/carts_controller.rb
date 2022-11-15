class CartsController < ApplicationController
    def show 
        @cart = Cart.find(params[:id])
        render json: @cart
    end

    def create 
        @cart = Cart.new(cart_params)
        @cart.save
        redirect_to @cart
    end

    private 
        def cart_params
            #params.require(:cart).permit(:name)
        end
end
