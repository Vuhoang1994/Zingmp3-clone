import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";

function AccountItem({data}){
    const cx = classNames.bind(styles)
    return(
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </div>
    )
}

export default AccountItem;