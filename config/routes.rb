Rails.application.routes.draw do
  #devise_for :users
  root to: "users#index"

  namespace :v1 do
    resources :sessions, only: [:create, :destroy]
  end
  resources :locations
  resources :items
  resources :users
  resources :projects
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
