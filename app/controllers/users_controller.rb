class UsersController < ApplicationController
    def index
        user = User.all
        render json: user, status: 200
    end 
end