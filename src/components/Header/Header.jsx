import "./Header.css";
import { useLocation } from "react-router-dom";
import Backup from "../../images/Backup.svg";
import SearchIcon from "../../images/SearchIcon.svg"

function Header() {
    let date = new Date()
    let day = new Date().getHours()
    let minutes = String(date.getMinutes()).padStart(2, "0");
    const location = useLocation();

    return (
        <header className="header">
            <div className="header__text-container">
                <p className='header__text' >{location.pathname === '/1screen' ? 'Прогноз спроса' : "Статистика"}</p>
                <img className="header__image" src={Backup} />
                <div className='header__data'>{day}:{minutes} обновлен сегодня </div>
            </div>
            <div className="header__search_container">
                <img className="header__search" src={SearchIcon} />
            </div>
        </header>
    )
}

export default Header