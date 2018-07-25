Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root to: "users#index"

  #namespace :v1 do
  #  resources :sessions, only: [:create, :destroy]
  #end

  resources :projects do
    resources :locations
    resources :items
  end

  #devise_scope :user do
  #  delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  #end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
