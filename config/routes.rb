Rails.application.routes.draw do
  root 'home#index'

  resources :servers, only: [:new, :create]
end
