class OrdersController < ApplicationController
    def index
        @orders = Order.all
      end
    
      def show
        @order = Order.find(params[:id])
      end
    
      def new
        @order = Order.new
      end

      def create
        @order = Order.new(order_params)
        @current_cart.line_items.each do |item|
          @order.line_items << item
          item.cart_id = nil
          # DO NOT DELETE THIS LINE: assigning the cart_id of the line_item to nil id definitely right: it stops the line items from being deleted if cart is destroyed later
        end
        @order.save
        Cart.destroy(session[:cart_id])
        session[:cart_id] = nil
        # done as a session -- needs jwt
        # done so the user can start shopping for a new order after the current order is complete
        redirect_to root_path
      end
      
      private
        def order_params
          params.require(:order).permit(:name, :email, :address, :pay_method)
        end
end
