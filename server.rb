require "sinatra"
require "sinatra/json"
require "json"

# You should not need to change the code in this file

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/app/views"

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

def read_articles
  JSON.parse(File.read("articles.json"))
end

get "/api/v1/articles" do
  @articles = read_articles

  content_type :json
  json @articles
end

get "/api/v1/articles/:id" do
  @articles = read_articles
  article_data = @articles["articles"]

  @article = article_data.find do |article|
    article["id"] == params[:id].to_i
  end

  content_type :json
  json @article
end

get "/api/v1/articles/:id/edit" do
  @articles = read_articles
  article_data = @articles["articles"]

  @article = article_data.find do |article|
    article["id"] == params[:id].to_i
  end

  content_type :json
  json @article
end

post "/api/v1/articles" do
  current_articles = read_articles

  article = JSON.parse(request.body.read)
  article["id"] = current_articles["articles"].last["id"] + 1

  current_articles["articles"] << article
  File.write("articles.json", JSON.pretty_generate(current_articles))

  content_type :json
  status 201
  json article
end

patch "/api/v1/articles/:id" do
  current_articles = read_articles
  new_article = JSON.parse(request.body.read)

  current_articles["articles"].reject! do |article|
    article["id"] == params[:id].to_i
  end

  current_articles["articles"] << new_article
  current_articles["articles"].sort_by! do |article|
    article["id"]
  end

  File.write("articles.json", JSON.pretty_generate(current_articles))
  content_type :json
  json new_article
end

get "*" do
  erb :home
end
