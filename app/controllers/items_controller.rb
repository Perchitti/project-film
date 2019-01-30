class ItemsController < ApplicationController
  before_action :set_item

  def create
    @item = current_user.items.new(item_params)
    @item.project = @project
      if @item.save
        render json: @item, status: 201
      else
        render json: {errors: @comment.errors.full_messages}, status: 400
      end
    end




  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @project = Project.find(params[:project_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def item_params
      params.require(:item).permit(:content)
    end
end
