class Api::CommentsController < ApplicationController

    def index
        # debugger
        @comments = [Comment.find_by(post_id: comment_params[:post_id]).as_json]
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
            render :show
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
        if @comment.user_id == current_user.id
            @comment.destroy
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end

end
