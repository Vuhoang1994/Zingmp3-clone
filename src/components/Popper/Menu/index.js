import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/Layout/components/AccountItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons/faEllipsisVertical";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from'./Menu.module.scss';
import MenuItem from "./MenuItem"
import Header from "~/components/Popper/Menu/Header";
import {useState} from "react";

const cx = classNames.bind(styles);

function Menu({children, items = [], onChange }){

    const [history, setHistory] = useState([{data: items}])
    const current = history[history.length - 1]

    const renderItems = () => {
         return current.data.map((item, index) => {
             const isParent = !!item.children
             return <MenuItem
                        key={index}
                        data={item}
                        onClick={() => {
                            if (isParent){
                                setHistory(prevState => [...prevState, item.children])
                            } else {
                                onChange(item)
                            }
                        }
             }/>
         });
    }
    return(
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={attrs => (

                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={() =>
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }
                    />}
                        {renderItems()}
                    </PopperWrapper>
                </div>

            )}
            onHide={() => setHistory(prevState => prevState.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;