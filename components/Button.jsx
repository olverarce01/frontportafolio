import styles from './Button.module.css'

export default function Button({value}) {
  return (
    <button className={`btn btn-outline-dark ${styles.button}`}>{value}</button>
  )
}
