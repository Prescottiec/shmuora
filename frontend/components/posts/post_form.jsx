import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        if (this.props.isEdit) {
            this.props.fetchPost(this.props.postId);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.isEdit) {
            this.props.updatePost(this.state);
        }
        else {
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
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleUpdate("title")} type="text" value={title}/>
                <input onChange={this.handleUpdate("body")} type="text" value={body}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }

}

export default PostForm;