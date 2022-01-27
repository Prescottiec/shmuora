Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:index, :create, :update, :destroy]
  end  
  root to: "static_pages#root"
end
