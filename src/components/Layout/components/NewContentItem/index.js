import styles from './NewContent.module.scss';
import classNames from 'classnames/bind';
import Button from "~/components/Button";
import {useContext, useState} from "react";
import songs from '../../../../assets/data/songs.json';
import { MediaContext } from '~/Context';


const Menu  = [
    {
        title: 'Tất cả',
        id: songs.map((song) => song.id)
    },
    {
        title: 'Việt Nam',
        id:[12,13,14,15,16,17,18,19,20,21,22,23]
    },
    {
        title: 'Quốc Tế',
        id: [23,24,25,26,27,28,29,30,31,32,33,34,35,36]
    }
]


const cx = classNames.bind(styles);
function NewContentItem(){
    const { setCurrentSong } = useContext(MediaContext);

    const handleSongClick = (song) => {
        setCurrentSong(song);
    };

    const [activeIndex, setActiveIndex] = useState(0); // Trạng thái lưu trữ chỉ số item hiện tại

    const handleButtonClick = (index) => {
        setActiveIndex(index); // Cập nhật chỉ số item khi nhấp vào nút
    };

    return(
        <div>
            <h3 className={cx('content-text')}>
                Mới Phát Hành
            </h3>
            <div className={cx('button-active')}>
                {Menu.map((item, index) => (
                    <Button
                        small
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        className={cx('button', { active: activeIndex === index })}
                    >
                        {item.title}
                    </Button>
                ))}
            </div>
            <div className={cx('item-content')}>
                {Menu[activeIndex].id.slice(0, 12).map((id) => (
                    <div
                        key={id}
                        className={cx('item-music')}
                        onClick={() => handleSongClick(songs[id])}
                    >
                        <img className={cx('image')} src={songs[id].links.images[0].url} alt="Album Cover" />
                        <div className={cx('content')}>
                            <h4 className={cx('name')}>{songs[id].name}</h4>
                            <p className={cx('singer')}>Singer: {songs[id].author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewContentItem;