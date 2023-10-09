import './TableChart.css'
import { useEffect, useState } from "react";
import Search from '../Search/Search';
import Store from "../../images/Store.svg"
import ShoppingBag from '../../images/ShoppingBag.svg';
import Calendar from "../../images/Calendar.svg";
import download from "../../images/download.svg";
import Folder from "../../images/Folder.svg";
import SmallPlus from "../../images/SmallPlus.svg";
import NoFilter from "../../images/NoFilter.svg";
import Grid from "../../images/Grid.svg"


function TableChart({ title }) {
    return (
        <div className="tablechart__container">
            <div className="tablechart__header_container">
                <h1 className="tablechart__header">{title}</h1>
                <div className='button__container'>
                    <div className="tablechart__header_buttoncontainer">
                        <div className="tablechart__button">Сохранить отчет</div>
                        <img className='tablechart__image_button' src={download} />
                    </div>
                    <div className="tablechart__header_buttoncontainer">
                        <div className="tablechart__button">Экспорт</div>
                        <img className='tablechart__image_button' src={Folder} />
                    </div>
                </div>
            </div>
            <div className="tablechart__filters">
                <div className="filters__container">
                    <Search />
                    <label className='filters__label'>
                        <img className='tablechart__image' src={Store} />
                        <select className="tablechart__selector">
                            <option className="filters__option" value="ТК 123">ТК 123</option>
                            <option className="filters__option" value="ТК 124">ТК 124</option>
                            <option className="filters__option" value="ТК 125">ТК 125</option>
                        </select>
                    </label>
                    <label className='filters__label'>
                        <img className='tablechart__image' src={ShoppingBag} />
                        <select className="tablechart__selector">
                            <option className="filters__option" value="Хлеб">Хлеб</option>
                            <option className="filters__option" value="Молоко">Молоко</option>
                            <option className="filters__option" value="Жопа">Жопа</option>
                        </select>
                    </label>
                    <label className='filters__label'>
                        <img className='tablechart__image' src={Calendar} />
                        <select className="tablechart__selector">
                            <option className="filters__option" value="на 14 дней">На 14 дней</option>
                        </select>
                    </label>
                    <div className="tablechart__header_addfilter">
                        <img className='tablechart__image_button' src={SmallPlus} />
                        <div className="tablechart__button">Добавить фильтр</div>
                    </div>
                </div>

                <div className='filters__buttons_container'>
                    <div className="filter__button">
                        <img className='tablechart__image' src={NoFilter} />
                    </div>
                    <div className="filter__button">
                        <img className='tablechart__image' src={Grid} />
                    </div>
                </div>
            </div>
        </div>
    )


}

export default TableChart