import styles from './ColeccionImagenes.module.css';

export default function ColeccionImagenes({children}) {
  return (
    <div className={styles.coleccion}>
      {children}
    </div>
  )
}
