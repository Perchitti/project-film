class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  def index
    @projects = Project.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @projects }
  end
end

  def show
    @location = @project.location
    if current_user
      @item = current_user.items.build(project: @project)
    end
  respond_to do |format|
    format.html { render :show }
    format.json { render json: @project }
  end
end

  def new
    if current_user
      @project ||= Project.new
    else
      redirect_to '/', notice: "You must be logged in."
  end
end

def create
  @project = current_user.projects.new(project_params)
    if @project.save
      redirect_to project_path(@project)
    else
      redirect_to new_project_path, alert: "Must add title"
    end
  end


  def edit
  end

  def project_data
    @project = Project.find(params[:id])
    render json: @project
  end


  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, project: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:title, :studio, :description, :location_id, :location_attributes => [:name, :address])
    end
end
