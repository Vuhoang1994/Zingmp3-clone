import styles from '../Album.module.scss';
import classNames from 'classnames/bind';
import Album from "../../Album";

const cx = classNames.bind(styles);


const RemixItems = [
    {
        content: 'Trải lòng cùng những ca khúc V-Pop được phối với tiếng...',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/2/a/4/d2a4b45341bf2fc2404ca6752323c81a.jpg',
        link: '/chude'
    },
    {
        content: 'Đóng băng thời gian , tan chầm châ theo cảm xúc',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/6/2/4/7624b08c5833ec4978a2c23379776000.jpg',
        link: '/chude'

    },
    {
        content: 'Âm nhạc V-Pop nhẹ nhàng cùng bạn chào đón những...',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/7/4/e/c74e01e399d15e2d901871e7035d9daf.jpg',
        link: '/chude'

    },
    {
        content: 'Va vào những giai điệu thư giãn của V-Pop',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/4/4/f/b44f9a303626918d354637c965c6feaa.jpg',
        link: '/chude'
    },

];
function Remix(){
    return(
        <div className={cx('content')}>
            <h3>Remix là Dance Luôn</h3>
             <Album items={RemixItems} />
        </div>
    );

}

export default Remix;