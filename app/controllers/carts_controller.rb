class CartsController < ApplicationController
    def show
        @cart = @current_cart
      end
    
      def destroy
        @cart = @current_cart
        @cart.destroy
        session[:cart_id] = nil
        # session--how do we make this jwt?
        redirect_to root_path
      end
end
