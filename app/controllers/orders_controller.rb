class OrdersController < ApplicationController
    # index_carts_on_user_id
    def index
        orders = Order.where(user_id: params[:user_id])
        render json: orders, status: :ok
    end
end
