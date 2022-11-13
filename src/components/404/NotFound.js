import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>Page not found...</PageTitle>
      <p>lorem ipsum</p>
    </div>
  );
};

export default NotFound;