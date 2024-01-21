class AddConnectionKeyToServers < ActiveRecord::Migration[7.0]
  def change
    add_column :servers, :connection_key, :string
  end
end
