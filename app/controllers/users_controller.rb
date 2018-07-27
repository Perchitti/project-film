class UsersController < ApplicationController

  def index
    @users = User.all
  end

def show
  @user = User.find(params[:id])
end

def projects
  if current_user
    @projects = current_user.projects
end
end

def destroy
  @user.destroy
  respond_to do |format|
    format.html { redirect_to users_url }
    format.json { head :no_content }
  end
end

end
