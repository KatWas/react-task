import styles from './List.module.scss';
import Column from '../Column/Column.js';


const List = () => {
    return (
      <div className = {styles.list}>
          <header className={styles.header}>
              <h2 className={styles.title}>Things to do<span>soon!</span></h2>
          </header>
          <p className={styles.description}>Interesting things I want to check out</p>
          <section className={styles.columns}>
             ${Column({ title: 'Books'})}<span className="fa fa-book"/>
             ${Column({ title: 'Movies'})}<span className="fa fa-movie"/>
             ${Column({ title: 'Games' })}<span className="fa fa-gamepad"/>
          </section>
      </div>
    );
  };
  
  export default List;