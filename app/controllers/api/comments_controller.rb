class Api::CommentsController < ApplicationController

    def index
        # debugger
        @comments = Comment.where(post_id: comment_params[:post_id])
        if @comments
            render :index
        else
            render json: ["This comment does not exist"], status: 404
        end
    end
    
    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            render "/api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.includes(:post, :user).find(params[:id])
        if @comment.update(comment_params) && @comment.user_id == current_user.id
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.includes(:post, :user).find(params[:id])
        # debugger
        if @comment.user_id == current_user.id
            @comment.destroy
            # render "/api/posts/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end

end
