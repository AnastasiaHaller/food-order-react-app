import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <>
            <header className={styles.header}>
                <h1>Japona Kitchen</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImage} alt="sushi"/>
            </div>
        </>
};

export default Header;