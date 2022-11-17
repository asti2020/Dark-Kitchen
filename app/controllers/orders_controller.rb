class OrdersController < ApplicationController
    # index_carts_on_user_id
    def index
        user = current_user
        orders = Order.find_by(user_id: current_user.id)
        render json: orders, status: :ok
    end
end
