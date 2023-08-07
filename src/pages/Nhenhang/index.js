import classNames from "classnames/bind";
import styles from './Guitar.module.scss'
import songs from '../../assets/data/songs.json';
import ChartItem from "~/components/Layout/components/ChartItem";
import React, {useContext, useState} from "react";
import {MediaContext} from "~/Context";
import Button from "~/components/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-regular-svg-icons";


const cx = classNames.bind(styles);

function Nhenhang(){

    const {setCurrentSong} = useContext(MediaContext);

    const handleSongClick = (song) => {
        setCurrentSong(song);
    };

    const [randomSong, setRandomSong] = useState(null);

    const [showRandomButton, setShowRandomButton] = useState(false);

    const handleRandomPlay = () => {
        const randomIndex = Math.floor(Math.random() * songs.length);
        const randomSong = songs[randomIndex];
        setCurrentSong(randomSong);
        setRandomSong(randomSong);
    };
    const handleMouseOver = () => {
        setShowRandomButton(true);
    };

    const handleMouseOut = () => {
        setShowRandomButton(false);
    };


    return(
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div
                    className={cx('content')}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <div className={cx("img-wrapper")}>
                        <img
                            className={cx("avatar")}
                            src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/3/3/8/3/338314b32165c5e44d6c7ec302d3fdfb.jpg"
                            alt="Guitar"
                        />

                        {showRandomButton && (
                            <button className={cx("random-button")} onClick={handleRandomPlay}>
                                <FontAwesomeIcon icon={faCirclePlay} size="3x" style={{color: "#ffffff",}} />
                            </button>
                        )}
                    </div>
                    <div className={cx('description')}>
                        <h2>
                            Nhẹ Nhàng Cùng V-pop
                        </h2>

                        <div>
                            Cập nhật : 11/07/2023
                        </div>

                        <div>
                            LyLy, Suni Hạ Linh, Bảo Anh, O.lew
                        </div>

                        <div>
                            63k người yêu thích
                        </div>

                        <div>
                            Lời tựa : Thả mình cùng những giai điệu V-pop nhẹ nhàng
                        </div>

                        <Button primary onClick={handleRandomPlay}>
                            Phát Ngẫu Nhiên
                        </Button>
                    </div>
                </div>

                {songs.map((song, index) => (
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
            </div>
        </div>
    );
}

export default Nhenhang;

