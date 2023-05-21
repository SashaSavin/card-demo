interface Colors {
  [key: string]: string
}

export const colorObj: Colors = {
  red: "#EE4444",
  blue: "#3C81F6",
  black: "black",
}

export const getImageByColor = (color: string) => {
  switch (color) {
    case colorObj.red:
      return "/images/image_red.png"
    case colorObj.blue:
      return "/images/image_blue.png"
    case colorObj.black:
      return "/images/image_black.png"
    default:
      return ""
  }
}
