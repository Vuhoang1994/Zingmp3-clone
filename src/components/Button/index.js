import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom"

const cx = classNames.bind(styles)
function Button({
                    to,
                    href,
                    children,
                    rounded = false,
                    disabled = false,
                    text = false ,
                    small = false,
                    large = false,
                    primary = false,
                    outline = false,
                    className,
                    leftIcon,
                    rightIcon,
                    onClick,
                    ...passProps}){
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    //Remove event listeners when btn is disabled
    if(disabled){
        Object.keys(children).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        })
    }
    if(to){
        props.to = to
        Comp = Link
    } else if(href){
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        rounded,
        large,
        disabled,
        [className]: className,
    })
    return(
        <Comp className = {classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>
                {children}
            </span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;