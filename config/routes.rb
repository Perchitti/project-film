Rails.application.routes.draw do

  root to: "greetings#index"


  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  #namespace :v1 do
  #  resources :sessions, only: [:create, :destroy]
  #end

  #post '/users/auth/facebook', to: 'projects#create'
resources :users, only: [:show] do
  resources :projects, to: 'users#projects'
end
  resources :projects do
    resources :locations
    resources :items
end

  #devise_scope :user do
  #  delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  #end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
