class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
        render :index
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def show
        @post = Post.find(params[:id])
        if @post
            render :show
        else
            render json: ["This post does not exist"], status: 404
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params) && @post.user_id == current_user.id
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        if @post.user_id == current_user.id
            @post.destroy
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private
    def post_params
        params.require(:post).permit(:title, :body, :user_id)
    end

end
