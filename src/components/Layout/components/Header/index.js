import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faKeyboard, faLanguage, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper/index';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion, faMoon } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English'
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts'
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: "Dark mode",
    status: false,
  }
]

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1,2,3])
    }, 0)
  }, [])

  return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
              <Link to='/'>
                <img src={images.logo} alt='TikTok'/>
              </Link>
            </div>

            <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    appendTo="parent"
                    placement='bottom-end'
                    render={(attrs) => (
                      <div className={cx('search-result')} {...attrs}>
                        <PopperWrapper>
                          <h4 className={cx('search-title')}>Accounts</h4>
                          <AccountItem/>
                          <AccountItem/>
                          <AccountItem/>
                          <AccountItem/>
                        </PopperWrapper>
                      </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                          <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                  <Button to='/upload' text>
                    +Upload
                  </Button>

                  <Button to="/login" primary>
                    Log in
                  </Button>

                  <Menu items={MENU_ITEMS}>
                    <button className={ cx('more-btn') }>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                  </Menu>

                </div>
            </div>
        </header>
  );
}

export default Header;