import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { MediaContext } from '~/Context';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    const { currentSong, songs = [], setCurrentSong } = useContext(MediaContext);


    return (
        <div className={cx('wrapper')}>
            {currentSong && (
                <div className={cx('item')}>
                    <div className={cx('image-container')}>
                        <img className={cx('image')} src={currentSong.imageUrl ? currentSong.imageUrl : currentSong.links.images[0].url} alt={currentSong.name} />
                    </div>
                    <div className={cx('details')}>
                        <h4 className={cx('title')}>{currentSong.name}</h4>
                        <span className={cx('artist')}>{currentSong.singer ? currentSong.singer : currentSong.author}</span>
                    </div>
                    <AudioPlayer
                        className={cx('media')}
                        src={currentSong.url}
                        showSkipControls={false}
                        autoPlay
                    />
                </div>
            )}
        </div>
    );
}

export default Footer;