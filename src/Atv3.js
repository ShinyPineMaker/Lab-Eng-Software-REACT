import React from "react";
import Gallery from "./Components/Atv3/Gallery";
import ToDoList from "./Components/Atv3/ToDoList";
import Profile from "./Components/Atv3/Profile";
import PackingList from "./Components/Atv3/PackingList";
import List from "./Components/Atv3/List";
import TeaGathering from "./Components/Atv3/TeaGathering";

const Atv3 = () => {
    return(
        <div>
            <Gallery />
            <ToDoList />
            <Profile />
            <PackingList />
            <List />
            <TeaGathering />
        </div>
    );
}

export default Atv3;