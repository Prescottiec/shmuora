class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find(params[:id])
        if @post
            render :show
        else
            render json: ["This post does not exist"], status: 404
        end
    end
    
end
