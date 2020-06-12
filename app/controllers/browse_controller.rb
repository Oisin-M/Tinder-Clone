class BrowseController < ApplicationController

  def browse
    @users = Account.where.not(id: current_account.id)
  end

  def approve
    #swipe right
  end

  def decline
    #swipe left
  end

end
