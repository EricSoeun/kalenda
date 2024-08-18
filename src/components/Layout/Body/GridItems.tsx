import { Grid, Container, Text } from "@mantine/core";
import { CardItem } from "../../Cards/CardItem";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../../../api";
// import { IProduce } from "../../../types/Item";

const child = <CardItem />;
// const child = <Skeleton height={140} radius="md" animate={false} />;

export function GridItems() {
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  return (
    <Container size={"xl"}>
      <Grid px={"xl"}>
        {data?.map((item) => (
          <Grid.Col span={{ base: 12, xs: 3 }}>
            <>
              {child}
              <Text>{item.title}</Text>
              <Text>{item._id}</Text>
            </>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
