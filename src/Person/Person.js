import React from 'react';
import './Personstyles.css';

const Person = (props) => {

    return (
        <div >
            <p className="personcalss">Please enter your username</p>
            <input type="text" className="textbox personcalss" onChange={props.changed} value={props.usrname} />
        </div>

    )


}

export default Person;