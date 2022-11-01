import styles from './Column.module.scss'

const Column = props => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span> className={Column.module.scss fa fa-icon} </span>{props.title}</h2>
        </article>
    );
};

export default Column;