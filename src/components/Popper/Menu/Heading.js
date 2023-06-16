import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Heading({title, onBack}) {
    return ( 
        <header className={cx('heading')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <h4 className={cx('heading-title')}>{title}</h4>
        </header>
     );
}

export default Heading;