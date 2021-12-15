import React from "react";

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div className="list-item">
                {this.props.post.title}
                {this.props.post.body}
            </div>
        )
    }
}

export default PostIndexItem;