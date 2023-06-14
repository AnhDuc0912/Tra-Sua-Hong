import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/fbfdc861b0dc18e07da41d9637c08d47~c5_100x100.jpeg?x-expires=1686884400&x-signature=WJakGhkaRRc0VVi0MkV2MMPpko8%3D" 
                alt="name"/>
            <div className={cx('info')}>
                <p className={cx('username')}>
                    <span>main_win</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className={cx('name')}>Bé ngoan Bình Dương</span>
            </div>
        </div>
     );
}

export default AccountItem;