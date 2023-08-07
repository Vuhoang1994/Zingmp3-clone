import React from 'react';
import classNames from 'classnames/bind';
import styles from './ChartItem.module.scss';

const cx = classNames.bind(styles);

function ChartItem({   index,
                       imageUrl,
                       name,
                       singer,
                       album,
                       duration,
                       url,
                       onSongClick,
                       isPlaying,
                   }) {
    const handleClick = () => {
        onSongClick({
            imageUrl: imageUrl,
            name: name,
            singer: singer,
            url: url,
            duration: duration
        });
    };

    return (
        <div
            className={cx('chart-item')}
            onClick={handleClick}
        >
            <div className={cx('index')}>{index}</div>
            <div className={cx('song')}>
                <img className={cx('img')} src={imageUrl} alt={name} />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>{name}</h4>
                    <span className={cx('singer')}>{singer}</span>
                </div>
            </div>
            <div className={cx('album')}>{album}</div>
            <div className={cx('duration')}>{duration}</div>
        </div>
    );
}

export default ChartItem;