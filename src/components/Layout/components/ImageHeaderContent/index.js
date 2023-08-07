import styles from './ImageHeader.module.scss';
import classNames from 'classnames/bind';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

const ImageHeaderItem =[
    {
        img: 'https://photo-zmp3.zmdcdn.me/banner/0/5/3/b/053b717b3fb0e42a3c294998a11ccf50.jpg',
        link: '/top100'
    },
    {
        img: 'https://photo-zmp3.zmdcdn.me/banner/3/6/8/d/368dcd5abf53f8cffbdf3ae16f22be95.jpg',
        link: '/nhacmoi'
    },
    {
        img: 'https://photo-zmp3.zmdcdn.me/banner/4/a/4/5/4a45495eedadeaf52e1e912e20e52311.jpg',
        link: '/radio'
    },
    {
        img: 'https://photo-zmp3.zmdcdn.me/banner/5/a/8/a/5a8a558ebcd1ec3d041f562c744a5e78.jpg',
        link: '/chude'
    },
    {
        img: 'https://photo-zmp3.zmdcdn.me/banner/9/8/5/5/9855066460f69f8d4e16c9eafe3fce5a.jpg',
        link: '/zingchart'
    },

]

function ImageHeader(){
    const [visibleImages, setVisibleImages] = useState(ImageHeaderItem.slice(0, 3));

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleImages((prevImages) => {
                const nextImages = [
                    prevImages[1],
                    prevImages[2],
                    ImageHeaderItem[(ImageHeaderItem.indexOf(prevImages[2]) + 1) % ImageHeaderItem.length]
                ];
                return nextImages;
            });
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className={cx('img-container')}>
            {visibleImages.map((item, index) => (
                <div key={index}>
                    <Link to={item.link}>
                        <img className={cx('img-content')} src={item.img} alt={`Image ${index}`} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ImageHeader;