import React from 'react';

const Comment = (props) => {
    return ( 
        <p>
            {props.content} <button style={
                {
                    fontSize: "9px",
                    padding: "5px",
                    marginTop: "10px",
                }
            }
            onClick={() => {
                props.deleteComment(props.content)
            }}>Delete</button>
        </p> 
    );
}

export default Comment;