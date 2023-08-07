import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from '../LoginForm/LoginForm.module.scss'


const cx = classNames.bind(styles);
const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleRegisterInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(registerData.email)) {
            setErrorMessage("Email không hợp lệ!");
            return;
        }

        if (registerData.password !== registerData.confirmPassword) {
            setErrorMessage("Mật khẩu không trùng khớp!");
            return;
        }

        if (!registerData.username) {
            setErrorMessage("Vui lòng nhập username!");
            return;
        }

        // Simulate registration success with a delay (1.5 seconds)
        setTimeout(() => {
            alert("Đăng ký thành công!");
            navigate("/login");
        }, 1000);
    };

    return (

        <body className={cx('body')}>
        <div className={cx('wrapper')}>
            <div className={cx('title-text')}>
                <div className={cx('title-login')}> Register Form</div>
            </div>

            <div className={cx('form-container')}>
                <div className={cx('form-inner')}>
                    <form onSubmit={handleRegisterSubmit} className={cx('login-form')}>
                        <div className={cx('field')}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={registerData.username}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className={cx('field')}>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={registerData.email}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className={cx('field')}>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={registerData.password}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className={cx('field')}>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={registerData.confirmPassword}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                        <button type="submit" className={cx('button-login')}>
                            Register
                        </button>
                        <p>
                            Already have an account? <Link to="/login">Log in here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </body>
    );
};

export default Register;