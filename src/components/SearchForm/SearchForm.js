import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button.js';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput />
            <button className={styles.button}>Search</button>
        </form>
    );
};

export default SearchForm;