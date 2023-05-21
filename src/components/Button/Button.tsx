import styles from "./button.module.scss"

interface IButton {
  type: "outlined" | "base"
  text?: string
  onClick?: () => void
}

export default function Button({ type, text }: IButton) {
  const getStylesByType = (type: string) => {
    switch (type) {
      case (type = "outlined"):
        return styles.outlined
      case (type = "base"):
        return styles.base
      default:
        return styles.outlined
    }
  }

  return <div className={getStylesByType(type)}>{text}</div>
}
