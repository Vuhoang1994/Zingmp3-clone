import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, {MenuItem} from "./Menu";
import config from '~/config'
import {
            KhamphaIcon,
            ZingchartIcon,
            RadioIcon,
            ThuvienIcon,
            ThuvienActiveIcon,
            RadioActiveIcon,
            ZingchartActiveIcon,
            KhamphaActiveIcon,
            NhacmoiIcon,
            NhacmoiActiveIcon,
            ChudeIcon,
            ChudeActiveIcon,
            Top100Icon,
            Top100ActiveIcon,
} from '~/components/Icons/icon'

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Khám Phá"
                    to={config.routes.home}
                    icon={<KhamphaIcon/>}
                    activeIcon={<KhamphaActiveIcon/>}
                />
                <MenuItem
                    title="#zingchart"
                    to={config.routes.zingchart}
                    icon={<ZingchartIcon/>}
                    activeIcon={<ZingchartActiveIcon/>}
                />
                <MenuItem
                    title="Radio"
                    to={config.routes.radio}
                    icon={<RadioIcon/>}
                    activeIcon={<RadioActiveIcon/>}
                />
                <MenuItem
                    title="Thư Viện"
                    to={config.routes.thuvien}
                    icon={<ThuvienIcon/>}
                    activeIcon={<ThuvienActiveIcon/>}
                />

                <hr/>

                <MenuItem
                    title="Chủ Đề & Thể Loại"
                    to={config.routes.chude}
                    icon={<ChudeIcon/>}
                    activeIcon={<ChudeActiveIcon/>}
                />

                <MenuItem
                    title="BXH Nhạc Mới"
                    to={config.routes.nhacmoi}
                    icon={<NhacmoiIcon/>}
                    activeIcon={<NhacmoiActiveIcon/>}
                />

                <MenuItem
                    title="Top 100"
                    to={config.routes.top100}
                    icon={<Top100Icon/>}
                    activeIcon={<Top100ActiveIcon/>}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
