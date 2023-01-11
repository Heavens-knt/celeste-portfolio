import styles from "./Error.module.css"

export const ErrorMessage = ({errorMessage}) => {
  return (
    <div className={styles.error}>
      {errorMessage}
    </div>
  )
}
