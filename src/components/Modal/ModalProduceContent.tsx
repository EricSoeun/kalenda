import { Divider, Group, Space, Stack, Text } from "@mantine/core";

// import { Carousel } from "@mantine/carousel";

interface ModalProduceContentProps {
  title: string;
  description: string;
}

export function ModalProduceContent(props: ModalProduceContentProps) {
  return (
    <>
      <Group grow>
        <Stack>
          <Text>{props.description}</Text>
        </Stack>
      </Group>
      <Space h="xl" />
      {/* <Stack>
        <Text size="xl" fw={700} inline m={0}>
          Photos
        </Text>
        <Divider m={0} color={"dark"} />
        <Carousel
          withIndicators
          height={200}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          <Carousel.Slide>
            <Image src={"https://placehold.co/200.jpg"} />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={"https://placehold.co/200.jpg"} />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={"https://placehold.co/200.jpg"} />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={"https://placehold.co/200.jpg"} />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={"https://placehold.co/200.jpg"} />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={"https://placehold.co/200.jpg"} />
          </Carousel.Slide>
        </Carousel>
      </Stack> */}

      <Space h="xl" />
      <Stack>
        <Text size="xl" fw={700} inline m={0}>
          Usages
        </Text>
        <Divider m={0} color={"dark"} />
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, nam,
          quia nulla quisquam quidem nobis eaque ut labore atque, facere
          impedit! Quaerat ratione impedit eos deserunt dolorum excepturi ullam,
          eveniet consequuntur cum mollitia facere omnis nihil ab. Tempora ut
          cumque ea? Ut vero non asperiores amet atque, cupiditate enim.
          Exercitationem, in.
        </Text>
      </Stack>
    </>
  );
}
