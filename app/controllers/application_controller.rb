class ApplicationController < ActionController::API
  # include ActionController::Cookies
      before_action :authorized

        @@secret_key = "#{ENV["SECRET_KEY"]}"
      
      def encode_token(payload)
        JWT.encode(payload, @@secret_key)
      end

      def decoded_token
        header = request.headers["Authorization"]
          if header
            token = header.split(" ")[1]
              begin
                JWT.decode(token, @@secret_key)
              rescue JWT::DecodeError
                nil
              end
          end
      end


    def current_user
        if decoded_token
            user_id =  decoded_token[0]["user_id"]
            user = User.find_by(id: user_id)
            # render json: user, status: 200
        end
    end

    def authorized
        unless !!current_user
            render json: {message: "Please log in"}, status: :unauthorized
        end
    end


end