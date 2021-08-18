import React from 'react';
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const posts = this.props.posts;
        return(
            <div>
                <div>
                    {
                        posts.map(post => (
                            <PostIndexItem
                            post={post}
                            key={`${post.id}`}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default PostIndex;