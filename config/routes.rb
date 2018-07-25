Rails.application.routes.draw do
  devise_for :users
  root to: "users#index"

  namespace :v1 do
    resources :sessions, only: [:create, :destroy]
  end

  resources :projects do
    resources :locations
    resources :items
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
