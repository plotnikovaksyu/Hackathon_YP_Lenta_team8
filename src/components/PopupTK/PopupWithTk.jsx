import { useState } from 'react';
import './PopupWithTk.css';
import store from '../../images/store.svg';
import storeClick from '../../images/storeClick.svg';

function PopupWithTk() {

    const [isChoosed, setIsChoosed] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    // выбираем ТК
    function chooseStore() {
        setIsDisabled(false)
    }


    function handleSubmit(evt) {
        evt.preventDefault();
        // закрыть автоматически попап
        // передать дату по ТК
    }

    return (
        // className={`popup-tk  ${isOpen ? 'popup-tk-is-opened' : '' }`}
        <section className='popup-tk popup-tk_is-opened'>
            <h2 className='popup-tk__title'>Выберите торговый комплекс для прогноза спроса</h2>
            <p className='popup-tk__subtitle'>Показаны магазины, доступные для вашего аккаунта.
                Вы&nbsp;всегда можете изменить торговый комплекс в&nbsp;фильтре отчета.</p>
            {/* добавить серч бар */}
            <form className='popup-tk__form' onSubmit={handleSubmit} noValidate>
                <fieldset className='popup-tk__group'>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-122'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 122' />
                        <label className='popup-tk__label' htmlFor='store-122'>
                            <div className='popup-tk__store'>
                                {/* <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} /> */}
                                <div className='popup-tk__icon'></div>
                                <p className='popup-tk__label-text' >
                                    122, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. 7-я Кожуховская, д. 9</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-123'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 123' />
                        <label className='popup-tk__label' htmlFor='store-123'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    123, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. 15-я Парковая, д. 40, к. 1</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-124'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 124' />
                        <label className='popup-tk__label' htmlFor='store-124'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    124, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. 2-я Мелитопольская, д. 3A</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-125'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 125' />
                        <label className='popup-tk__label' htmlFor='store-125'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    125, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. 1-я Останкинская, д. 55</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-126'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 126' />
                        <label className='popup-tk__label' htmlFor='store-126'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    126, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. Адмирала Лазарева, д. 62</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-127'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 127' />
                        <label className='popup-tk__label' htmlFor='store-127'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    127, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. Академика Королева, д. 8, лит. А</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-128'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 128' />
                        <label className='popup-tk__label' htmlFor='store-128'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    128, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. Бауманская, д. 32, стр. 2</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-129'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 129' />
                        <label className='popup-tk__label' htmlFor='store-129'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    129, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. 15-я Парковая, д. 40, к. 1</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-130'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 130' />
                        <label className='popup-tk__label' htmlFor='store-130'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    130, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. Елецкая, д. 15</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-131'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 131' />
                        <label className='popup-tk__label' htmlFor='store-131'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    131, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. Академика Капицы, д. 28</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-132'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 132' />
                        <label className='popup-tk__label' htmlFor='store-132'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    132, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. 2-я Владимирская, д. 59/39</p>
                        </label>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-133'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 133' />
                        <label className='popup-tk__label' htmlFor='store-133'>
                            <div className='popup-tk__store'>
                                <img className='popup-tk__icon'
                                    alt='выбрать ТК'
                                    src={!isChoosed ? store : storeClick} />
                                <p className='popup-tk__label-text' >
                                    133, г. Москва, ЮАО
                                </p>
                            </div>
                            <p className='popup-tk__text'>ул. Армавирская, д. 5</p>
                        </label>
                    </div>
                </fieldset>

                <button className={`popup-tk__submit ${!isDisabled ? 'popup-tk__submit_included' : 'popup-tk__submit_disabled'}`}
                    type='submit'>Готово
                </button>
            </form>

        </section >
    )
}

export default PopupWithTk;