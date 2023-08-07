import React, {useContext, useState} from 'react';
import ChartItem from '~/components/Layout/components/ChartItem';
import songs from '../../assets/data/songs.json';
import {MediaContext} from "~/Context";
import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "~/pages/Zingchart/ZingChart.module.scss";

const cx = classNames.bind(styles);

function Radio() {
    const {setCurrentSong} = useContext(MediaContext);

    const handleSongClick = (song) => {
        setCurrentSong(song);
    };

    const [showAllItems, setShowAllItems] = useState(false);

    const handleViewMore = () => {
        setShowAllItems(true);
    };

    const displayedSongs = showAllItems ? songs : songs.slice(0, 10);

    return (
        <div>
            <h1 className={cx('title')}>Radio</h1>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <span>Bảng Xếp Hạng Nhạc Việt</span>
                </div>

                {displayedSongs.map((song, index) => (
                    <ChartItem
                        key={index}
                        index={index + 1}
                        imageUrl={song.links.images[0].url}
                        name={song.name}
                        singer={song.author}
                        album={song.album}
                        duration={song.duration}
                        url={song.url}
                        onSongClick={handleSongClick}
                    />
                ))}

                {!showAllItems && (
                    <div className={cx('button')}>
                        <Button outline className={cx('view-more-button')} onClick={handleViewMore}>
                            Xem top 100
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Radio;