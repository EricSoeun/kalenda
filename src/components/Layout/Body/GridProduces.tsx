import { Grid, Container, Text } from "@mantine/core";
import { CardProduce } from "../../Cards/CardProduce";
import { useQuery } from "@tanstack/react-query";
import { getProduces} from "../../../api";

const child = <CardProduce />;
// const child = <Skeleton height={140} radius="md" animate={false} />;

export function GridProduces() {
  const { data } = useQuery({
    queryKey: ["produces"],
    queryFn: getProduces,
  });

  return (
    <Container size={"xl"}>
      <Grid px={"xl"}>
        {data?.map((produce) => (
          <Grid.Col span={{ base: 12, xs: 3 }}>
            <>
              {child}
              <Text>{produce.title}</Text>
              <Text>{produce._id}</Text>
            </>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
