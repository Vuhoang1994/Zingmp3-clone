// import React, { useState } from 'react';
// import classNames from 'classnames/bind';
// import styles from './Footer.module.scss';
//
// const cx = classNames.bind(styles);
//
// const musicData = [
//     {
//         title: 'Việt Nam - My Home',
//         imageUrl:
//             'https://avatar-ex-swe.nixcdn.com/song/2023/07/10/8/5/a/e/1688956878464.jpg',
//         artist: 'Masew',
//         duration: '03:43',
//         audioUrl: 'https://c3-ex-swe.nixcdn.com/Believe_Audio179/ChoiNhuTuiMy-AndreeRightHand-8465614.mp3',
//     },
//     {
//         title: 'Ngày Mình Chia Tay',
//         imageUrl:
//             'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/6/9/f/069f8224915823c010fb52642c9fff2f.jpg',
//         artist: 'Phan Duy Anh, ACV',
//         duration: '05:17',
//         audioUrl: 'https://c3-ex-swe.nixcdn.com/Believe_Audio179/ChoiNhuTuiMy-AndreeRightHand-8465614.mp3',
//     },
//     // Add more music items as needed
// ];
//
// function Footer(){
//     const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(false);
//
//     const currentTrack = musicData[currentTrackIndex];
//
//     const handlePlayPause = () => {
//         setIsPlaying(!isPlaying);
//     };
//
//     const handleNext = () => {
//         setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicData.length);
//         setIsPlaying(false);
//     };
//
//     const handlePrev = () => {
//         setCurrentTrackIndex((prevIndex) =>
//             prevIndex === 0 ? musicData.length - 1 : prevIndex - 1
//         );
//         setIsPlaying(false);
//     };
//
//     return (
//         <div className={cx('item')}>
//             <div className={cx('image-container')}>
//                 <img className={cx('image')}/>
//             </div>
//             <div className={cx('details')}>
//                 <h4 className={cx('title')}>{currentTrack.title}</h4>
//                 <span className={cx('artist')}>{currentTrack.artist}</span>
//             </div>
//         </div>
//     );
// }
//
// export default Footer;