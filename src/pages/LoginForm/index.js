import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./LoginForm.module.scss"
import Button from "~/components/Button";
import {faSignIn} from "@fortawesome/free-solid-svg-icons/faSignIn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // Kiểm tra email hợp lệ
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(loginData.email)) {
            setErrorMessage("Email không hợp lệ!");
            return;
        }

        // Xử lý logic đăng nhập tại đây (chẳng hạn kiểm tra đúng tài khoản)
        // Nếu đăng nhập thành công, quay lại trang chủ ('/')
        if (loginData.email === "hoang@gmail.com" && loginData.password === "123456") {
            navigate("/");
        } else {
            setErrorMessage("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    };

    return (
        <body className={cx('body')}>
            <div className={cx('wrapper')}>
                <div className={cx('title-text')}>
                    <div className={cx('title-login')}> Login Form</div>
                </div>

                <div className={cx('form-container')}>
                    <div className={cx('form-inner')}>
                        <form onSubmit={handleLoginSubmit} className={cx('login-form')}>
                            <div className={cx('field')}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={loginData.email}
                                    onChange={handleLoginInputChange}
                                />
                            </div>
                            <div className={cx('field')}>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={loginData.password}
                                    onChange={handleLoginInputChange}
                                />
                            </div>

                            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                            <button type="submit" className={cx('button-login')}>
                                Login
                            </button>
                            <p>
                                Don't have an account? <Link to="/register">Register here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default LoginForm;