import { useState } from 'react';
import './PopupWithTk.css';
import store from '../../images/store.svg';
import storeClick from '../../images/storeClick.svg';

function PopupWithTk() {

    const [isChoosed, setIsChoosed] = useState(false);


    // меняем иконку при выборе элемента
    function chooseStore() {
        setIsChoosed(true);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
    }

    return (
        <section className='popup-tk'>
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
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-122'>
                                122, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. 7-я Кожуховская, д. 9</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-123'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 123' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-123'>
                                123, г. Москва, ЮАО
                            </label>
                        </div>

                        <p className='popup-tk__text'>ул. 15-я Парковая, д. 40, к. 1</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-124'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 124' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-124'>
                                124, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. 2-я Мелитопольская, д. 3A</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-125'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 125' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-125'>
                                125, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. 1-я Останкинская, д. 55</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-126'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 126' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-126'>
                                126, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. Адмирала Лазарева, д. 62</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-127'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 127' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-127'>
                                127, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. Академика Королева, д. 8, лит. А</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-128'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 128' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-128'>
                                128, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. Бауманская, д. 32, стр. 2</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-129'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 129' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-129'>
                                129, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. 15-я Парковая, д. 40, к. 1</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-130'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 130' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-130'>
                                130, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. Елецкая, д. 15</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-131'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 131' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-131'>
                                131, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. Академика Капицы, д. 28</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-132'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 132' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-132'>
                                132, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. 2-я Владимирская, д. 59/39</p>
                    </div>

                    <div className='popup-tk__item'>
                        <input className='popup-tk__input'
                            id='store-133'
                            type='radio'
                            name='store'
                            onClick={chooseStore}
                            value='ТК 133' />
                        <div className='popup-tk__store'>
                            <img className='popup-tk__icon'
                                alt='выбрать ТК'
                                src={!isChoosed ? store : storeClick} />
                            <label className='popup-tk__label' htmlFor='store-133'>
                                133, г. Москва, ЮАО
                            </label>
                        </div>
                        <p className='popup-tk__text'>ул. Армавирская, д. 5</p>
                    </div>

                </fieldset>
                <button className='popup-tk__submit popup-tk__submit_disabled' type='submit'>Готово</button>
            </form>

        </section >
    )
}

export default PopupWithTk;