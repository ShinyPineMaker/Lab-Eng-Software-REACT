import React from "react";
import profile from "./tinyriju.png";

const person = {
    name: "Gregorio Y. Zara",
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

const ToDoList = () => {
    return(
        <div style={person.theme}>
            <h1>{person.name}</h1>
            <img 
            className="avatar"
            src={profile}
            alt={person.name}
            />
            <ul>
                <li>Improve the VideoPhone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alchohol-fueled engine</li>
            </ul>
        </div>
    );
}

export default ToDoList;