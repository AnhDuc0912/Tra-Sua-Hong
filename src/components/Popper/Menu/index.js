import Tippy from "@tippyjs/react/headless";
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper/index';
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({children, items = []}) {
    const renderItems = () => {
      return items.map((item, index) => (
        <MenuItem key={index} data={item}/>
      ))
    }

    console.log(renderItems());

    return ( 
        <Tippy
          interactive
          appendTo="parent"
          placement="bottom-end"
          delay={[0, 1000]}
          render={(attrs) => (
            <div className={cx('content')} {...attrs}>
              <PopperWrapper>
                {renderItems()}
              </PopperWrapper>
            </div>
          )}
        >
          {children}
        </Tippy>
     );
}

export default Menu;