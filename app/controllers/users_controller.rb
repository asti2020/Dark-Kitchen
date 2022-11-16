class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create, :profile]

    rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record

        def create
            user = User.create!(user_params)
            token = encode_token({user_id: user.id, user_type: user.user_type})
            render json: {user: UserSerializer.new(user), jwt: token}, status: :created
        end
        def me
            render json: current_user, status: :accepted
        end
        def profile
            if current_user
                render json: current_user, status: :ok
                else
                    puts("No user provided")
                    render json: current_user, status: :not_found
            end
        end
        # def userProduct
        #     if current_user
        #         user = User.find(params[:id])
        #         products = user.products
        #         render json: products, status: :ok
        #     end
        # end

private
        def user_params
            params.permit(:username, :password, :password_confirmation, :email, :full_name, :user_type)
        end

        def handle_invalid_record(invalid)
            render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
end