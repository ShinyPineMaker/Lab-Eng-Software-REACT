import React from "react";
import pfp from "./tinyriju.png";

const Avatar = ({person, size = 100}) => {
    return (
        <img 
        className="avatar"
        src={pfp}
        alt={person.name}
        width={size}
        height={size}
        />
    )
}

const Profile = () => {
    return(
        <Avatar
            person={{name: "Lin Lanying", imageId:"ibX5QH6"}}
            size={100 + "px"}
        />
    )
}

export default Profile;