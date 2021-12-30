import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.post;
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
            this.props.updatePost(this.state);
        }
        else {
            // console.log(this.state);
            this.props.createPost(this.state).then(() => {
                this.props.history.push("/posts")
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
        let title = this.state ? this.state.title : "";
        let body = this.state ? this.state.body : "";
        return(
            <div className="post-form-block">
                <input onChange={this.handleUpdate("title")} type="text" value={title} className="post-form-title"/>
                <input onChange={this.handleUpdate("body")} type="text" value={body} className="post-form-body"/>
                <button onClick={() => this.handleSubmit()} className="post-form-button">button</button>
            </div>
        )
    }

}

export default PostForm;