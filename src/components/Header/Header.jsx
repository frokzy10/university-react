import logo from '/vite.svg'
import {useState} from "react";
import "./Header.css";
import {Link} from "react-router-dom";

export default function Header() {
    const [time, setTime] = useState(new Date())
    setInterval(() => setTime(new Date()), 1000)

    return (
        <header>
            <div className={"logoTitleContainer"}>
                <img src={logo} alt={'Result'}/>
                <h3>Result university</h3>
            </div>
            <div className="right_header">
                <Link to="/">Домой</Link>
                <Link to="/feedback">Отзыв</Link>
                <span>Время на данный момент: {time.toLocaleTimeString()}</span>
            </div>
        </header>
    )
}