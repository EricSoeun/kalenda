import { Grid, Container } from "@mantine/core";
import { CardProduce } from "../../Cards/CardProduce";
import { useQuery } from "@tanstack/react-query";
import { getProduces } from "../../../api";
import {produceMocked} from "../../../api/mockup"

// const child = <Skeleton height={140} radius="md" animate={false} />;

export function GridProduces() {
  const { data } = useQuery({
    queryKey: ["produces"],
    queryFn: getProduces,
  });
  
  console.log('data: ', data);
  
  return (
    <Container size={"xl"}>
      <Grid px={"xl"}>
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
