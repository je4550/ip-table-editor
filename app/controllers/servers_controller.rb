class ServersController < ApplicationController
  def new
    @server = Server.new
  end

  def create
    @server = Server.new(server_params)
    if @server.save
      redirect_to root_path, notice: "Server was successfully added."
    else
      render :new
    end
  end

  private

  def server_params
    params.require(:server).permit(:name, :ip_address)
  end
end
