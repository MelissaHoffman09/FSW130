import {React, useState} from 'react';
import {UglyContextConsumer} from './UglyContext';
import Comment from './Comment';

const Card = (props) => {
    const [showEditForm, setEditForm] = useState(false);
    const [editFormValue, setEditFormValue] = useState(props.title)
    const [editFormDescription, setEditFormDescription] = useState(props.description)
    const [comments, setComments] = useState([]);
    const [editComment, setEditComment] = useState('');


    const deleteComment = (comment) => {
        const indexOfComment = comments.indexOf(comment);
        const newData = comments;
        console.log(`Attempting to delete ${comment} at index ${newData.indexOf(comment)}`)
        newData.splice(indexOfComment, 1);
        setComments(newData)
        setEditFormValue('');
    }

    return (
        <UglyContextConsumer>
            {context => (
                <div className="card">
                    <div className="img" style={{backgroundImage: "url(" + props.link + ")"}}></div>
                    <span>{props.title} - {props.description}</span>    
                    {showEditForm && <input value={editFormValue} onChange={e => setEditFormValue(e.target.value)} />}
                    {showEditForm && <input value={editFormDescription} onChange={e => setEditFormDescription(e.target.value)} />}
                    <button className="delb" onClick={() => {
                        if(showEditForm) {
                            context.updateUgly(props.title, {title: editFormValue, description: editFormDescription, link: props.link});
                        }
                        showEditForm ? setEditForm(false) : setEditForm(true);
                    }}>Edit</button>
                    <button className="delb" onClick={() => context.removeUgly(props.title)} >Delete</button>
                <div className="delb">

                        <input value={editComment} onChange={e => setEditComment(e.target.value)} placeholder="Leave a comment" />
                        <button onClick={() => {
                            setComments(prevState => [...prevState, editComment]);
                            setEditComment('');
                        }}>Submit</button>
                    <p>Comments:</p>
                    {comments.map(item => (
                        <Comment content={item} deleteComment={deleteComment}/>
                    ))}
                </div>
                </div>
            )}
        </UglyContextConsumer>
    );
}

export default Card;