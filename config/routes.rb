Rails.application.routes.draw do
  root 'servers#new'
  resources :servers, only: [:new, :create]
end
