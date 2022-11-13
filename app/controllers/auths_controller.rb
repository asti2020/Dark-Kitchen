class AuthsController < ApplicationController
    skip_before_action :authorized, only: [:login]
    rescue_from ActiveRecord::RecordNotFound, with: :invalid_username


    def login
        user = User.find_by(username: log_params[:username])
        if user && user.authenticate(log_params[:password])
                token = encode_token({user_id: user.id})
                render json: {user: UserSerializer.new(user), token: token}, status: :ok
            else
                render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

private
    def log_params
        params.permit(:username, :password)
    end


    def invalid_username
        render json: {error: "Invalid username"}, status: 401
    end

end