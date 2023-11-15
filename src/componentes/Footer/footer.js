import styles from './footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
 return (
    <footer className = {styles.footer}>
      <Link className = {styles.links} to="/Error">Contactanos</Link>
      <Link className = {styles.links} to="/Error">
        <img src='Email.png' className = {styles.email} alt='email'/>
      </Link>
    </footer>
 );
};

export default Footer;