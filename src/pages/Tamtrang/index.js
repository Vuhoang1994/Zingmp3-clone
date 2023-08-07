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

function Tamtrang(){

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
                            src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg"
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
                            Lofi Một Chút Thôi
                        </h2>

                        <div>
                            Cập nhật : 19/07/2023
                        </div>

                        <div>
                            Kai Đinh, Vicky Nhung, Kha, Vương Anh Tú
                        </div>

                        <div>
                            16k người yêu thích
                        </div>

                        <div>
                            Lời tựa : Nhạc Việt "lâu phai" và gây nghiện hoài hoài
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

export default Tamtrang;

