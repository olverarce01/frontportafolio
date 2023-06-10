import styles from './Label.module.css';

export default function Label({title,body}) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{body}</p>
    </div>
  )
}
