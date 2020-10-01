Rails.application.routes.draw do
  get 'news/index'
  resources :news
  get 'news/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static_pages#home'
  get 'o-mnie', to: 'static_pages#about'
  get 'aktualnosci', to: 'news#index'
end
