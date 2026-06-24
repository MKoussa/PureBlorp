defmodule PureBlorpWeb.PageController do
  use PureBlorpWeb, :controller

  def home(conn, _params) do
    render(conn, :home)
  end
end
