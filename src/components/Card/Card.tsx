"use client"
import { ICard } from "@/shared/types"
import styles from "./card.module.scss"
import Image from "next/image"
import { useCallback, useState } from "react"
import Button from "../Button/Button"
import { colorObj, getImageByColor } from "./utils"

const IMAGE_SIZE = 258

export default function Card({ name, descr, price, colors }: ICard) {
  const [activeColor, setActiveColor] = useState<string>(colorObj.red)

  const handleColorChange = useCallback((color: string) => {
    setActiveColor(color)
  }, [])

  return (
    <div className={styles.card}>
      <Image
        src={getImageByColor(activeColor)}
        placeholder="empty"
        alt="img"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        priority={true}
      />

      <div className={styles.text}>
        <h1>${price}</h1>
        <h3>{name}</h3>
        <small>{descr}</small>

        <div className={styles.color}>
          <small style={{ color: "gray" }}>Choose your colour</small>
          <div className={styles.color_btns}>
            {colors?.map((color: string, index: number) => (
              <div key={index}>
                <button
                  className={styles.btn}
                  style={{
                    background: `${colorObj[color]}`,
                    border:
                      activeColor === colorObj[color]
                        ? "4px solid black"
                        : "4px solid white",
                  }}
                  onClick={() => handleColorChange(colorObj[color])}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles["btn__group"]}>
        <Button type="base" text="Add to card" />
        <Button type="outlined" text="Buy now" />
      </div>

      <small className={styles.read}>read reviews</small>
    </div>
  )
}
