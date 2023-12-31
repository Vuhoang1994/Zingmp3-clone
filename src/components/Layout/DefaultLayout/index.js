import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar';
import Footer from "~/components/Layout/components/Footer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
