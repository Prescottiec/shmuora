// import React from 'react';

// class PostEdit extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = this.props.post;

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(type){
//         return e => {
//             this.setState({
//                 [type]: e.currentTarget.value
//             })
//         }
//     }

//     handleSubmit(e){
//         e.preventDefault();

//         // Update the post after user presses submit
//         // then, reload the page
//         this.props.updatePost(this.state).then(location.reload());
//     }

//     render(){
//         return (
//             <div className="post-form">

//                 <div className="post-edit-title-block">
//                     <label className="post-edit-title">Edit Question and Source</label>
//                 </div>

//                 <form onSubmit={this.handleSubmit}>
//                     <input className="post-body-input-box" placeholder={"Start your post with \"What\", \"How\", \"Why\", etc."} type="text" value={this.state.body} onChange={this.handleChange("body")}></input>
//                     <div className="post-create-buttons-block">
//                         <label></label>
//                         <div className="post-create-buttons">
//                             <button className="post-create-cancel-button" onClick={() => this.props.closeModal()}>Cancel</button>
//                             <button className="post-create-submit-button">Save</button>
//                         </div>
//                     </div>
//                 </form>

//             </div>
//         )
//     }

// }

// export default PostEdit;