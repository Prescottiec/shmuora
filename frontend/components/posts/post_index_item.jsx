import React from "react";

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div className="list-items">
                <div className="post-title">
                    {this.props.post.title}
                </div>
                <div className="post-body">
                    {this.props.post.body}
                </div>
            </div>
        )
    }
}

export default PostIndexItem;