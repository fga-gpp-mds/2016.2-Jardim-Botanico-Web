module SessionsHelper
  def sign_in(user)
    session[:user_id] = user.id
    redirect_to :action => "show",:id => @user.id
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def block_access
    if current_user.present?
      redirect_to home_path
    end
  end

  def authorize
      redirect_to '/sign_in' unless current_user
    end

  def logged_in?
    !current_user.nil?
  end
end
