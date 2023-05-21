import { ReactNode } from "react"

export type Props = {
  children: ReactNode
  animate?: boolean
}

export interface ICard {
  name: string
  descr: string
  price: number
  colors: string[]
}
