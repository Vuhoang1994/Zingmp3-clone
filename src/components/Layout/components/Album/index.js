import React from "react";
import { Link } from "react-router-dom";
import styles from './Album.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Album({ items }) {
    return (
        <div className={cx('album-content')}>
            {items.map((item, index) => (
                <div key={index} className={cx('item-album')}>
                    <Link to={item.link}>
                        <img src={item.img} alt={item.content} className={cx('album-img')} />
                        <p className={cx('album-text')}>{item.content}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Album;