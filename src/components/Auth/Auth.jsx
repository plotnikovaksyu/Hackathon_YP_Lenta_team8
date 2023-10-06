// import React from 'react';
import './Auth.css';
import '../../utils/opacity.css';
import logo from '../../images/main_logo.svg';
import arrow from '../../images/outline.svg';
import arrowYellow from '../../images/outlineY.svg'
import eye from '../../images/eye.svg';
import { useState } from 'react';


function Auth({ login }) {

    const [userRegistrationData, setUserRegistrationData] = useState({
        login: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false)

    const [press, setPress] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setUserRegistrationData({
            ...userRegistrationData,
            [name]: value,
        })

        setErrors({ ...errors, [name]: e.target.validationMessage })
        setIsValid(e.target.closest("form").checkValidity())
    }

    function handleSubmit(e) {
        e.preventDefault();
        login();
    }

    //изменить иконку submit button при нажатии
    const pressSubmitButton = () => {
        setPress(true);
    }

    const pushUpSubmitButton = () => {
        setPress(false);
    }


    return (
        <section className='auth'>
            <div className='auth__main-picture'></div>
            <div className='auth__content'>

                <img className='auth__logo' src={logo} alt="логотип Ленты" />
                <form className='auth__form' noValidate onSubmit={handleSubmit}>
                    <h2 className='auth__title'>Добрый день!</h2>
                    <p className='auth__text'>Используйте для входа логин или персональный Лента&nbsp;ID</p>
                    <fieldset className='auth__fieldset'>
                        <div className="input__container">
                            <input className='auth__input auth__input_login'
                                placeholder='Введите логин или ID'
                                required
                                name='login'
                                type='text'
                                value={userRegistrationData.login}
                                onChange={handleChange}
                            >
                            </input>
                            <span className="auth__error">{errors.login}</span>
                        </div>
                        <div className="input__container">
                            <input className='auth__input auth__input_password'
                                placeholder='Введите пароль'
                                required
                                name='password'
                                type={passwordShown ? "text" : 'password'}
                                value={userRegistrationData.password}
                                onChange={handleChange}

                            >
                            </input>
                            <img className='auth_password' src={eye} onClick={togglePassword} />
                            <span className="auth__error">{errors.password}</span>
                        </div>

                        <button className='auth__button'
                            type='submit'
                            onPointerDown={pressSubmitButton}
                            onPointerUp={pushUpSubmitButton}
                            aria-label='авторизоваться'>
                            Войти
                            <img className='auth__arrow'
                                src={!press ? arrow : arrowYellow}
                                alt='авторизоваться' />
                        </button>

                    </fieldset>
                    <div className='auth__links'>
                        <a className='auth__link opacity' href='#'>Забыли пароль?</a>
                        <a className='auth__link opacity' href='#'>Связаться с&nbsp;поддержкой</a>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Auth;