import React from 'react';
import './Personlast.css'

const Personlast = (props) => {

    return (
        <div className='endpart'>
            <p>Regards,</p>
            <p>{props.usrname}</p>
        </div>

    );

};

export default Personlast;