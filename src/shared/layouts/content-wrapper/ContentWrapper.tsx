import { Props } from "@/shared/types"
import React from "react"
import styles from "./contentWrapper.module.scss"

export default function ContentWrapper({ children }: Props) {
  return <div className={`${styles.wrapper}`}>{children}</div>
}
