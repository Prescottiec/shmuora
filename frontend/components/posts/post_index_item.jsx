import React from "react";

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this.props);
        return(
            <div>
                sami
                {/* {this.props.post.title} */}
                {/* {this.props.post.body} */}
            </div>
        )
    }
}

export default PostIndexItem;