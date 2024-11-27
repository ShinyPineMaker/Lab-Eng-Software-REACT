import React from "react";

const Cup = ({guest}) => {
    return <h2>Tea Cup for #{guest}</h2>
}

const TeaGathering = () => {
    let cups = [];
    for (let i = 1; i <= 5; i++){
        cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
}

export default TeaGathering;