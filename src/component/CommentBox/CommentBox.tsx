import "./CommentBox.css"
import React from "react";

function CommentBox(props: any) {
    return ( 
        <input 
           type={"text"} 
           placeholder={props.placeholder}
           className="commentBox"
        />
     );
}

export default CommentBox;