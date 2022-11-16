class CartlinesController < ApplicationController
    def index
        @cartlines = CartLine.all
    end
    

    def show
        @cartline = CartLine.find(params[:id])
    end
    
    
    def create
        @product = Product.find(params[:product_id])
        @cartline = @cart.add_product(@product)

        respond_to do |format|
            if @cartline.save
              format.html { redirect_to @cartline.cart, notice: 'Line item was successfully created.' }
              format.json { render :show, status: :created, location: @cartline }
            else
              format.html { render :new }
              format.json { render json: @cartline.errors, status: :unprocessable_entity }
            end
          end
    end

    def update
        respond_to do |format|
            if @cartline.update(cartline_params)
              format.html { redirect_to @line_item, notice: 'Line item was successfully updated.' }
              format.json { render :show, status: :ok, location: @cartline }
            else
              format.html { render :edit }
              format.json { render json: @cartline.errors, status: :unprocessable_entity }
            end
          end
    end

      # GET /line_items/new
    def new
     @cartline = CartLine.new
    end
    
    def destroy
        @cartline = CartLine.find(params[:id])
        @cartline.destroy
        respond_to do |format|
          format.html { redirect_to cartline_url, notice: 'Line item was successfully destroyed.' }
          format.json { head :no_content }
        # redirect_to cart_path(current_user.cart)
        end
        end

    private
    def set_line_item
        @cartline = CartLine.find(params[:id])
    end
        
    def cartline_params
        params.require(:cartline).permit(:product_id)
    end
end
