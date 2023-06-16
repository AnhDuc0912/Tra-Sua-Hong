import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({data, onClick}) {
    return ( 
        <Button 
            to={data.to} 
            href={data.href}
            basic leftIcon={data.icon} 
            className={cx('btn-content', {separate: data.separate})} 
            onClick={onClick}
        >
            {data.title}
        </Button>
     );
}

export default MenuItem;