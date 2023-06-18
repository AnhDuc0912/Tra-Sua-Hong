import HeadlessTippy from '@tippyjs/react/headless';
import {
    faCircleXmark, 
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper/index';
import { SearchIcon } from '../Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue])

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    
    const handleHideResult = () => {
        setShowResult(false);
    }
    
    console.log(searchResult.length, showResult);
    return ( 
        <HeadlessTippy
              interactive
              visible={showResult && searchResult.length > 0}
              appendTo="parent"
              placement='bottom-end'
              onClickOutside={handleHideResult}
              render={(attrs) => (
                <div className={cx('search-result')} {...attrs}>
                  <PopperWrapper>
                    <h4 className={cx('search-title')}>Accounts</h4>
                    {searchResult.map(user => 
                        <AccountItem key={user.id} data={user}/>
                    )}
                  </PopperWrapper>
                </div>
              )}
            >
              <div className={cx('search')}>
                  <input 
                    ref={inputRef}
                    placeholder="Search accounts and videos" 
                    spellCheck={false} 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                    />
                  {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                  
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                  <button className={cx('search-btn')}>
                    <SearchIcon />
                  </button>
              </div>
            </HeadlessTippy>
     );
}

export default Search;