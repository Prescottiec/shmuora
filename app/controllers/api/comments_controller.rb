class Api::CommentsController < ApplicationController
    
    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
    end

    def update
        @comment = Comment.includes(:post, :user).find_by(id: params[:id])
        if @comment.update(comment_params) && @comment.user_id == current_user.id
            # render "/api/posts/show"
            #redirect_to api_post_url(@comment.post_id)
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.includes(:post, :user).find_by(id: params[:id])

        #post_show_id = @comment.post_id

        if @comment.user_id == current_user.id
            @comment.destroy
            # render "/api/posts/show"
            #redirect_to api_post_url(post_show_id)
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end

end
