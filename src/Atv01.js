import { Link } from "react-router-dom";
import Board from "./Components/Board.js";
import Clock from "./Components/Clock.js"

const Atv01 = () => {

    return (
        <>
            <h2> Atividade 01 </h2>
            <Board />
            <Clock />

            <Link to="/">Voltar</Link>
        </>
    )

}

export default Atv01;