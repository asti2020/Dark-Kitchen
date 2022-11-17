class Order < ApplicationRecord
  belongs_to :user

  def index
    orders = Order.where(user_id: params[:user_id])
    render json: orders, status: :ok
  end
end
