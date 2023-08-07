import styles from '../Album.module.scss';
import classNames from 'classnames/bind';
import Album from "../../Album";


const cx = classNames.bind(styles);

const ChillItems = [
    {
        content: 'Trải lòng cùng những ca khúc V-Pop được phối với tiếng...',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/8/7/0/b87093d7201c164981d6132ca0673745.jpg',
        link: '/guitar'
    },
    {
        content: 'Nhạc Việt "lâu phai" và gây nghiện hoài hoài',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg',
        link: '/tamtrang'

    },
    {
        content: 'Thả mình cùng những giai điệu V-Pop nhẹ nhàng',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/3/8/3/338314b32165c5e44d6c7ec302d3fdfb.jpg',
        link: '/nhenhang'

    },
    {
        content: 'Va vào những giai điệu thư giãn của V-Pop',
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/c/c/c/4ccc7780abb5e8e2de84218f721b7ad3.jpg',
        link: '/chude'
    },

];
function Chill(){
    return(
        <div className={cx('content')}>
            <h3>Chill</h3>
             <Album items={ChillItems} />
        </div>
    );

}

export default Chill;