require "rubygems"
require "bundler/setup"

require "sinatra"

get "/*" do
	erb :"#{params[:splat]}"
end
