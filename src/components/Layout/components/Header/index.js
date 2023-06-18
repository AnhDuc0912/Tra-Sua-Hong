import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faBookmark, faCircleQuestion, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '~/components/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English' 
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        }
      ]
    }, 
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
  const currentUser = true;

  //Handle Logic
  function handleMenuChange(menuItem) {
    switch (menuItem.type) {
      case 'language':
        //Handle
        break;
      default:
    }
  }

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: '/@win'
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: "Favorite",
      to: '/@win'
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coin",
      to: '/coin'
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: '/seting'
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Log out",
      to: '/logout',
      separate: true
    }
  ]


  return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
              <Link to='/'>
                <img src={images.logo} alt='TikTok'/>
              </Link>
            </div>

            <Search/>

            <div className={cx('actions')}>
              {currentUser ? (
                <>
                  <Button to='/upload' text>
                    +Upload
                  </Button>

                  <Tippy delay={[0, 200]} content="Messages" placement='bottom'>
                    <button className={cx('actions-btn')}>
                      <MessageIcon />
                    </button>
                  </Tippy>

                  <Tippy delay={[0, 200]} content="Inbox" placement='bottom'>
                    <button className={cx('actions-btn')}>
                      <InboxIcon />
                      <span className={cx('badge')}>12</span>
                    </button>
                  </Tippy>

                </>
              ) : (
                    <>
                      <Button to='/upload' text>
                        +Upload
                      </Button>
        
                      <Button to="/login" primary>
                        Log in
                      </Button>
                    </>
                  )}
      
                  <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                      <Image 
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/fbfdc861b0dc18e07da41d9637c08d47~c5_100x100.jpeg?x-expires=1686974400&x-signature=TwyiISUUTUc3dv9CUNjtwhleQGI%3D" 
                        className={cx('user-avatar')}
                        alt='Bé ngoan Bình Dương'/>
                    ) : (
                        <button className={ cx('more-btn') }>
                          <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    )}
                  </Menu>
            </div>
        </div>
    </header>
  );
}

export default Header;