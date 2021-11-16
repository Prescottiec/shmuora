class Api::CommentsController < ApplicationController
    
    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            # render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.includes(:post, :user).find(params[:id])
        if @comment.update(comment_params) && @comment.user_id == current_user.id
            # render :show
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
