import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/Atv1">Atividade 1</Link>
                </li>
                <li>
                    <Link to="/Atv2">Atividade 2</Link>
                </li>
                <li>
                    <Link to="/Atv3">Atividade 3</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;