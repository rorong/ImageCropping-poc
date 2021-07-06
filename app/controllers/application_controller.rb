# frozen_string_literal: false

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end
