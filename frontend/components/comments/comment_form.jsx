import React from "react";

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.post.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        // if (this.props.isEdit) {
        //     this.props.fetchPost(this.props.postId);
        // }
    }

    handleSubmit(e) {
        // e.preventDefault();
        if (this.props.isEdit) {
            this.props.updateComment(this.state);
        }
        else {
            // console.log(this.state);
            this.props.createComment(this.state).then(() => {
                this.props.history.push("/browse")
            })
        };
    }

    handleUpdate(type) {
        return e => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    render() {
        let comment = this.state ? this.state.comment : "";
        return(
            <div className="post-form-page">
                <div className="post-form-block">

                    <textarea onChange={this.handleUpdate("comment")} type="text" value={comment} className="post-form-body" placeholder="Comment"/>
                    <button onClick={() => this.handleSubmit()} className="post-form-button">Add Comment</button>
                </div>
            </div>
        )
    }

}

export default CommentForm;