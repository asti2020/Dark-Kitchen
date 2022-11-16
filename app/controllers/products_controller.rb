class ProductsController < ApplicationController
    def index
        @products = Product.all.order("created_at desc")
    end

    def show
    end
    
    def new
        @product = current_user.product.build
    end
    
    def edit
    end

    def create
        @product = current_user.product.build(product_params)
    
        respond_to do |format|
          if @product.save
            format.html { redirect_to @product, notice: 'Product was successfully created.' }
            format.json { render :show, status: :created, location: @product }
          else

            format.html { render :new }
            format.json { render json: @product.errors, status: :unprocessable_entity }
          end
        end
      end
    
      def update
        respond_to do |format|
          if @product.update(product_params)
            format.html { redirect_to @product, notice: 'Product was successfully updated.' }
            format.json { render :show, status: :ok, location: @product }
          else
            format.html { render :edit }
            format.json { render json: @product.errors, status: :unprocessable_entity }
          end
        end
      end
    
     def destroy
        @product.destroy
        respond_to do |format|
          format.html { redirect_to products_url, notice: 'pProduct was successfully destroyed.' }
          format.json { head :no_content }
        end
    end
  
    private
      def set_product
        @product = Product.find(params[:id])
      end
  
      def product_params
        params.require(:product).permit(:name, :price, :quantity, :ingredients, :allergens, :description, :category, :calories, :image_url)
      end
end
