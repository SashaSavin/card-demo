import Card from "@/components/Card/Card"
import { data } from "@/shared/api/mock"
import ContentWrapper from "@/shared/layouts/content-wrapper/ContentWrapper"

export default function Home() {
  return (
    <ContentWrapper>
      {data.map(({ name, price, descr, colors }, idx: number) => (
        <Card
          key={idx}
          name={name}
          price={price}
          descr={descr}
          colors={colors}
        />
      ))}
    </ContentWrapper>
  )
}
