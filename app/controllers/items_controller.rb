class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update]

  # GET /items
  # GET /items.json
  def index
    @items = Item.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @items }
  end
end

  # GET /items/1
  # GET /items/1.json
  def show
    @project = Project.find(params[:project_id])
    @item.project = @project
  end

  # GET /items/new
  def new
    @item = Item.new
    @item.save
  end

  # GET /items/1/edit
  def edit
  end

  # POST /items
  # POST /items.json
  def create
    @project = Project.find(params[:project_id])
    @item = current_user.items.new(item_params)
    @item.project = @project
    respond_to do |format|
      if @item.save
        format.html { redirect_to @project }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    @item = current_user.items.new(items_params)
    @item.project = @project
    respond_to do |format|
      if @item.update(item_params)
        format.html { redirect_to project_item_path, notice: 'Item was successfully updated.' }
        format.json { render :show, status: :ok, location: @item }
      else
        format.html { render :edit }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    @project = Project.find(params[:project_id])
    @item = current_user
    @item.destroy
    respond_to do |format|
      format.html { redirect_to project_item_path, notice: 'Item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @project = Project.find(params[:project_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def item_params
      params.fetch(:item).permit(:content)
    end
end
