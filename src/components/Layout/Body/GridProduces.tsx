import { Grid, Container } from "@mantine/core";
import { CardProduce } from "../../Cards/CardProduce";
import { useQuery } from "@tanstack/react-query";
import { getProduces } from "../../../api";
import { produceMocked } from "../../../api/mockup";

// const child = <Skeleton height={140} radius="md" animate={false} />;

interface GridProducesProps {
  monthDisplayed: number;
}

export function GridProduces(props: GridProducesProps) {
  const { data } = useQuery({
    queryKey: ["produces"],
    queryFn: getProduces,
  });

  console.log("data: ", data);

  return (
    <Container size={"lg"}>
      <Grid 
      py={"md"} 
      gutter={"lg"}>
        {/* <Text>{props.monthDisplayed}</Text> */}
        {produceMocked.map((produce) => (
          // {data?.map((produce) => (
          <Grid.Col span={{ base: 12, xs: 3 }}>
            <CardProduce
              produceTitle={produce.title}
              endAt={produce.endAt}
              produceImage={produce.image}
              remainingDays={produce.remainingDays}
              spendingDays={produce.spendingDays}
              totalDays={produce.totalDays}
              startAt={produce.startAt}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
