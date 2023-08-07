import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import ImageHeaderContent from "~/components/Layout/components/ImageHeaderContent";
import NewContentItem from "~/components/Layout/components/NewContentItem";
import Chill from "~/components/Layout/components/Album/Chill";
import Remix from "~/components/Layout/components/Album/Remix";


const cx = classNames.bind(styles);

function Home() {

    return (
        <div className={cx('wraper')}>
            <ImageHeaderContent/>
            <div className={cx('main-content')}>
                <NewContentItem/>
                <Chill/>
                <Remix/>
            </div>
        </div>
    );

}

export default Home;