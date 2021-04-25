import {React, useState} from 'react';
import {UglyContextConsumer} from './UglyContext';
import './../styles.css';

const AddForm = () => {

    const [UglyTitle, setUglyTitle] = useState(''); 
    const [UglyDescription, setUglyDescription] = useState(''); 
    const [UglyLink, setUglyLink] = useState(''); 

    return ( 
        <UglyContextConsumer>
            {context => (
            <div>
                <h1>Creepy Crawly Ugly Things</h1>
                <form onSubmit={e => {
                    e.preventDefault();
                    context.addUgly(UglyTitle, UglyDescription, UglyLink);
                    setUglyTitle('');
                    setUglyDescription('');
                    setUglyLink('');
                }}>
                    <input value={UglyTitle} onChange={e => { setUglyTitle(e.target.value) }} placeholder="Title"/>
                    <input value={UglyDescription} onChange={e => { setUglyDescription(e.target.value) }} placeholder="Description"/>
                    <input value={UglyLink} onChange={e => { setUglyLink(e.target.value) }} placeholder="URL Link"/>
                    <button>Submit</button>
                </form>
            </div>
            )}
        </UglyContextConsumer>
    );
}

export default AddForm;