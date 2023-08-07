import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia, faGear,
    faMoon, faRectangleAd, faSignOut,
    faSun, faUser
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Header.module.scss';
import images from '~/assets/images';
import {useEffect, useState} from "react";
import Button from "~/components/Button";
import {faSignIn} from "@fortawesome/free-solid-svg-icons/faSignIn";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons/faEllipsisVertical";
import Menu from "~/components/Popper/Menu";
import Search from "~/components/Layout/components/Search";
import {Link} from "react-router-dom";


const cx = classNames.bind(styles);

function Header() {

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: "Ngôn ngữ",
            children:{
                title: 'Ngôn ngữ',
                data: [
                    {
                        code: 'vi',
                        title: 'Tiếng việt'
                    },
                    {
                        code: 'en',
                        title: 'English'
                    },
                ]
            }
        },

        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: "Trợ giúp",
            to: '/feedback'
        },

        {
            icon: <FontAwesomeIcon icon={faRectangleAd} />,
            title: "Quảng cáo",
            to: '/ads'
        }
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'}>
                    <img
                        src={images.logo}
                        alt="Tiktok"
                    />
                </Link>

                <Search/>

                <div className={cx('action')}>
                    <Link to={'/login'}>
                        <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                            Log in
                        </Button>
                    </Link>

                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    </Menu>

                </div>
            </div>

        </header>
    );
}

export default Header;
