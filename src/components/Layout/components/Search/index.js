import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/Layout/components/AccountItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faMagnifyingGlass, faSpinner, faX, faXmark} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import styles from "./Search.module.scss"
import classNames from "classnames/bind";
import {useDebounce} from "~/hooks";
import {useEffect, useState, useRef} from "react";

const cx = classNames.bind(styles);

function Search(){
    const [searchValue, setSearchValue] = useState('')

    const [searchResults, setSearchResults] = useState([]);

    const [showResult, setShowResult] = useState(true);

    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 800);

    const inputRef = useRef();

    useEffect(() =>{
        if(!debounced.trim()){
            setSearchResults([]);
            return;
        }

        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResults(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false)
            })
    },[debounced]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResults([]);
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
        interactive
        visible={showResult && searchResults.length > 0}
        render={attrs => (

            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h4 className={cx('search-title')}>
                        Gợi ý kết quả
                    </h4>
                    {searchResults.map((result) => (
                        <AccountItem key ={result.id} data={result} />
                        ))}
                </PopperWrapper>
            </div>
        )}
        onClickOutside={handleHideResult}
    >
        <div className={cx('search')}>
            <input
                ref={inputRef}
                value={searchValue}
                placeholder="Tim kiếm bài hát, nghệ sĩ, lời bài hát..."
                spellCheck={false}
                onChange={ (e) => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading && (
                <button className={cx('clear')}
                onClick={ handleClear} >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            )}

            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

            <button className={cx('search-btn')}>
                <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
            </button>
        </div>
    </HeadlessTippy>);
}

export default Search;