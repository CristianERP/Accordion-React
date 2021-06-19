import React, { useState} from 'react';


const Question = ({id, title, info}) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="question">
            <div className="header-question">
                <h3>{title}</h3>
                <button className="btn" onClick={() => setIsOpen(!isOpen)}>{isOpen ? '-': '+'}</button>
            </div>
            {isOpen ? 
            <div className="info-question">
                {info}
            </div> :
            <div></div>
            }
        </div>
    )
}

export default Question;