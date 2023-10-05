// import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import logoMini from '../../images/logoMini.svg';
import logoFull from '../../images/logoFull.svg';
import forecast from '../../images/forecast.svg';
import statistics from '../../images/statistics.svg';
import forecastYellow from '../../images/forecastYellow.svg';
import statisticsYellow from '../../images/statisticsYellow.svg';
import reveal from '../../images/reveal.svg';
import revealYellow from '../../images/revealYellow.svg';
import hide from '../../images/hide.svg';
import hideYellow from '../../images/hideYellow.svg'
import bell from '../../images/bell.svg';
import bellYellow from '../../images/bellYellow.svg';
import setting from '../../images/setting.svg';
import settingYellow from '../../images/settingYellow.svg';
import support from '../../images/support.svg';
import supportYellow from '../../images/supportYellow.svg';
import exit from '../../images/exit.svg';
import exitYellow from '../../images/exitYellow.svg';
import avatar from '../../images/avatar.png';
import decorativeSmall from '../../images/decorativeSmall.svg';
import decorativeBig from '../../images/decorativeBig.svg';

import './Navbar.css';

import Tooltip from '../Tooltip/Tooltip';

function Navbar() {

    const [isShort, setIsShort] = useState(true);
    const [isForecast, setIsForecast] = useState(false);
    const [isStatistics, setIsStatistics] = useState(false);
    const [isReveal, setIsReveal] = useState(false);
    const [isHide, setIsHide] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [isSupport, setIsSupport] = useState(false);
    const [isSetting, setIsSetting] = useState(false);
    const [isExit, setIsExit] = useState(false);

    // сужаем/раскрываем боковое меню
    function toggleShortBar() {
        setIsShort(false)
    }

    function toggleFullBar() {
        setIsShort(true)
    }

    // меняем лого прогноза при клике
    function toggleDownForecast() {
        setIsForecast(true)
    }
    function toggleUpForecast() {
        setIsForecast(false)
    }

    // меняем лого статистики при клике
    function toggleDownStatistics() {
        setIsStatistics(true)
    }
    function toggleUpStatistics() {
        setIsStatistics(false)
    }

    // меняем кпопку раскрыть меню при клике
    function toggleDownReveal() {
        setIsReveal(true)
    }
    function toggleUpReveal() {
        setIsReveal(false)
    }

    // меняем кпопку скрыть меню при клике
    function toggleDownHide() {
        setIsHide(true)
    }
    function toggleUpHide() {
        setIsHide(false)
    }

    // меняем кпопку уведомления при клике
    function toggleDownNotification() {
        setIsNotification(true)
    }
    function toggleUpNotification() {
        setIsNotification(false)
    }

    // меняем кпопку настройки при клике
    function toggleDownSetting() {
        setIsSetting(true)
    }
    function toggleUpSetting() {
        setIsSetting(false)
    }

    // меняем кпопку связаться с тех поддержкой при клике
    function toggleDownSupport() {
        setIsSupport(true)
    }
    function toggleUpSupport() {
        setIsSupport(false)
    }

    // меняем кпопку выхода при клике
    function toggleDownExit() {
        setIsExit(true)
    }
    function toggleUpExit() {
        setIsExit(false)
    }


    return (

        <section className={`navbar ${isShort ? 'navbar_compressed' : 'navbar_full'}`}>

            {isShort
                ? (<img className='navbar__logo navbar__logo_compressed'
                    src={logoMini}
                    alt='логотип Ленты' />)
                : (<img className='navbar__logo navbar__logo_full'
                    src={logoFull}
                    alt='логотип Ленты' />)}

            <div className='navbar__menu'>

                <nav>
                    {isShort
                        ? (<ul className='navbar__list navbar__list_up'>
                            <Tooltip text='Прогноз спроса'>
                                <li className='navbar__item navbar__item_short'>
                                    <a className='navbar__link navbar__forecast'
                                        href='#'
                                        onPointerDown={toggleDownForecast}
                                        onPointerUp={toggleUpForecast}
                                        lang='ru'
                                        target='_blank'
                                        rel='noreferrer'>
                                        <img className='navbar__icon'
                                            src={!isForecast ? forecast : forecastYellow}
                                            alt='Прогноз спроса' />
                                    </a>
                                </li>
                            </Tooltip>

                            <Tooltip text='Статистика'>
                                <li className='navbar__item navbar__item_short '>
                                    <a className='navbar__link navbar__statistics'
                                        href='#'
                                        onPointerDown={toggleDownStatistics}
                                        onPointerUp={toggleUpStatistics}
                                        lang='ru'
                                        target='_blank'
                                        rel='noreferrer'>
                                        <img className='navbar__icon'
                                            src={!isStatistics ? statistics : statisticsYellow}
                                            alt='Статистика' />
                                    </a>
                                </li>
                            </Tooltip>
                        </ul>)
                        : (<ul className='navbar__list navbar__list_up'>
                            <Tooltip text='Прогноз спроса'>
                                <li className='navbar__item navbar__item_full navbar__forecast'>
                                    <a className='navbar__link navbar__link_full'
                                        href=''
                                        onPointerDown={toggleDownForecast}
                                        onPointerUp={toggleUpForecast}
                                        lang='ru'
                                        target='_blank'
                                        rel='noreferrer'>
                                        <img className='navbar__icon navbar__icon_full'
                                            src={!isForecast ? forecast : forecastYellow}
                                            alt='Прогноз спроса' />
                                        Прогноз спроса
                                    </a>
                                </li>
                            </Tooltip>
                            <Tooltip text='Статистика'>
                                <li className='navbar__item navbar__item_full navbar__statistics'>
                                    <a className='navbar__link navbar__link_full'
                                        href='#'
                                        onPointerDown={toggleDownStatistics}
                                        onPointerUp={toggleUpStatistics}
                                        lang='ru'
                                        target='_blank'
                                        rel='noreferrer'>
                                        <img className='navbar__icon navbar__icon_full'
                                            src={!isStatistics ? statistics : statisticsYellow}
                                            alt='Статистика' />
                                        Статистика
                                    </a>
                                </li>
                            </Tooltip>
                        </ul>)}
                </nav>

                <div className='navbar__block'>
                    {isShort
                        ? (<Tooltip text='Развернуть меню'>
                            <button className='navbar__tumbler button'
                                onPointerDown={toggleDownReveal}
                                onPointerUp={toggleUpReveal}
                                onClick={toggleShortBar}>
                                <img className='navbar__icon navbar__icon-tumbler'
                                    src={!isReveal ? reveal : revealYellow}
                                    alt='развернуть меню' />
                            </button>
                        </Tooltip>)
                        : (<Tooltip text='Свернуть меню'>
                            <button className='navbar__tumbler navbar__tumbler_full button'
                                onPointerDown={toggleDownHide}
                                onPointerUp={toggleUpHide}
                                onClick={toggleFullBar}>
                                <img className='navbar__icon navbar__icon-tumbler navbar__icon-tumbler_full'
                                    src={!isHide ? hide : hideYellow}
                                    alt='свернуть меню' />
                            </button>
                        </Tooltip>)}

                    <nav className='navbar__lower-half'>
                        {isShort
                            ? (
                                <>
                                    <ul className='navbar__list navbar__list_down'>
                                        <Tooltip text='Уведомления'>
                                            <li className='navbar__item'>
                                                <a className='navbar__link'
                                                    href='#'
                                                    onPointerDown={toggleDownNotification}
                                                    onPointerUp={toggleUpNotification}
                                                    lang='ru'
                                                    target='_blank'
                                                    rel='noreferrer'>
                                                    <img className='navbar__icon'
                                                        src={!isNotification ? bell : bellYellow}
                                                        alt='уведомления' />
                                                </a>
                                            </li>
                                        </Tooltip>
                                        <Tooltip text='Настройки'>
                                            <li className='navbar__item'>
                                                <a className='navbar__link'
                                                    href='#'
                                                    onPointerDown={toggleDownSetting}
                                                    onPointerUp={toggleUpSetting}
                                                    lang='ru'
                                                    target='_blank'
                                                    rel='noreferrer'>
                                                    <img className='navbar__icon'
                                                        src={!isSetting ? setting : settingYellow}
                                                        alt='настройки' />
                                                </a>
                                            </li>
                                        </Tooltip>
                                        <Tooltip text='Связаться с поддержкой'>
                                            <li className='navbar__item'>
                                                <a className='navbar__link'
                                                    href='#'
                                                    onPointerDown={toggleDownSupport}
                                                    onPointerUp={toggleUpSupport}
                                                    lang='ru'
                                                    target='_blank'
                                                    rel='noreferrer'>
                                                    <img className='navbar__icon'
                                                        src={!isSupport ? support : supportYellow}
                                                        alt='связаться с поддержкой' />
                                                </a>
                                            </li>
                                        </Tooltip>
                                        <Tooltip text='Выйти из аккаунта'>
                                            <li className='navbar__item'>
                                                <button className='navbar__exit button'
                                                    onPointerDown={toggleDownExit}
                                                    onPointerUp={toggleUpExit}
                                                >
                                                    <img className='navbar__icon'
                                                        src={!isExit ? exit : exitYellow}
                                                        alt='выйти из аккаунта' />
                                                </button>
                                            </li>
                                        </Tooltip>
                                    </ul>
                                    <div className='navbar__avatar-block'>
                                        <img className='navbar__avatar'
                                            src={avatar}
                                            alt='аватар профиля' />
                                    </div>
                                </>
                            )
                            : (<>
                                <ul className='navbar__list navbar__list_full navbar__list_down'>
                                    <Tooltip text='Уведомления'>
                                        <li className='navbar__item'>
                                            <a className='navbar__link navbar__link_full'
                                                href='#'
                                                onPointerDown={toggleDownNotification}
                                                onPointerUp={toggleUpNotification}
                                                lang='ru'
                                                target='_blank'
                                                rel='noreferrer'>
                                                <img className='navbar__icon navbar__icon_full'
                                                    src={!isNotification ? bell : bellYellow}
                                                    alt='уведомления' />
                                                Уведомления
                                            </a>
                                        </li>
                                    </Tooltip>
                                    <Tooltip text='Настройки'>
                                    <li className='navbar__item'>
                                        <a className='navbar__link navbar__link_full'
                                            href='#'
                                            onPointerDown={toggleDownSetting}
                                            onPointerUp={toggleUpSetting}
                                            lang='ru'
                                            target='_blank'
                                            rel='noreferrer'>
                                            <img className='navbar__icon navbar__icon_full'
                                                src={!isSetting ? setting : settingYellow}
                                                alt='настройки' />
                                            Настройки
                                        </a>
                                    </li>
                                    </Tooltip>
                                    <Tooltip text='Связаться с поддержкой'>
                                    <li className='navbar__item'>
                                        <a className='navbar__link navbar__link_full'
                                            href='#'
                                            onPointerDown={toggleDownSupport}
                                            onPointerUp={toggleUpSupport}
                                            lang='ru'
                                            target='_blank'
                                            rel='noreferrer'>
                                            <img className='navbar__icon navbar__icon_full'
                                                src={!isSupport ? support : supportYellow}
                                                alt='связаться с поддержкой' />
                                            Связаться с поддержкой
                                        </a>
                                    </li>
                                    </Tooltip>
                                    <Tooltip text='Выйти из аккаунта'>
                                    <li className='navbar__item'>
                                        <button className='navbar__exit navbar__exit_full button navbar__link_full'
                                            onPointerDown={toggleDownExit}
                                            onPointerUp={toggleUpExit}
                                        >
                                            <img className='navbar__icon navbar__icon_full'
                                                src={!isExit ? exit : exitYellow}
                                                alt='выйти из аккаунта' />
                                            Выйти
                                        </button>
                                    </li>
                                    </Tooltip>
                                </ul>
                                <div className='navbar__avatar-block navbar__avatar-block_full'>
                                    <img className='navbar__avatar'
                                        src={avatar}
                                        alt='аватар профиля' />
                                    <div className='navbar__avatar-info'>
                                        <h2 className='navbar__avatar-name'>Вильгельмина Внезапнобежная</h2>
                                        <p className='navbar__avatar-id'>ID 3544872</p>
                                    </div>

                                </div>
                            </>)}
                    </nav>

                </div>


            </div>
            <img className='navbar__style navbar__style_compressed' src={!isShort ? decorativeBig : decorativeSmall} alt='корпоративный стиль Ленты' />

        </section >
    )
}

export default Navbar;