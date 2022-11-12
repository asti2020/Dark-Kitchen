class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record

    def create
        user = User.create!(user_params)
        token = encode_token({user_id: user.id})
        render json: {user: UserSerializer.new(user), jwt: token}
    end

        def me
            render json: current_user, status: :accepted
        end

private
        def user_params
            params.permit(:username, :password, :password_confirmation, :email, :full_name, :user_type)
        end

        def handle_invalid_record(invalid)
            render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
    end