class ProductsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record
    skip_before_action :authorized, only: [:index]

    def index
        products = Product.all
        render json: products
    end

    def create
        if current_user.user_type == "chef"
            product = Product.create(product_params)
            render json: product, status: :created
        else
            render json: {error: "You are not a chef"}, status: :unauthorized
        end
    end




private

    def product_params
        params.permit(:food_name, :price, :ingredient, :picture, :category).merge(user_id: current_user.id)
    end

    def handle_invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
