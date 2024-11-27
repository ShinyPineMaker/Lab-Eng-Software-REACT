import React from "react";
import scientist from "./tinyriju.png";

const Profile = () => {
    return(
        <img src={scientist}
        alt="mad scientist" 
        style={{scale: 25 + '%', margin: 0, padding: 0}}
        />
    )
}

const Gallery = () => {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

export default Gallery;