import './LineChart.css'
import { useEffect, useState } from "react";
import square from "../../images/square.svg"
import threedots from "../../images/threedots.svg"
import Preloader from "../../images/Preloader.svg"
import Chart from "../Chart/Chart";
import decrease from '../../images/decrease.svg'

function LineChart() {
    return (
        <div className="linechart__container">
            <div className="linechart__header_container">
                <h1 className="linechart__header">График спроса на 14 дней</h1>
                <div className="linechart__header_iconcontainer">
                    <img className="linechart__preloader" src={Preloader} />
                    <img className="linechart__image" src={decrease} />
                    <img className="linechart__image" src={threedots} />
                </div>
            </div>
            <div className="linechart__filters">
                <div className="filters__container">
                    {/* <label className='filters__label'>Параметр:
                        <select className="linechart__selector">
                            <option value="Прогноз спроса">Прогноз спроса</option>
                        </select>
                    </label> */}
                    <label className='filters__label'>Срез:
                        <select className="linechart__selector">
                            <option value="Хлеб">Хлеб</option>
                            <option value="Молоко">Молоко</option>
                            <option value="Жопа">Жопа</option>
                        </select>
                    </label>
                </div>
                <label className='filters__label'>Отображение:
                    <select className="linechart__selector">
                        <option value="на 14 дней">по дням</option>
                    </select>
                </label>

            </div>
            <Chart />
        </div>
    )


}

export default LineChart