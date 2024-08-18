import { Carousel, Embla } from "@mantine/carousel";
import classes from "./CarouselProduces.module.css";
import { ActionIcon, Group, Space, Text } from "@mantine/core";
import { GridProduces } from "../Layout/Body/GridProduces";
import { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export function CarouselProduces() {
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleNext = () => embla?.scrollNext();
  const handlePrev = () => embla?.scrollPrev();

  return (
    <>
      <Group justify="center">
        <ActionIcon onClick={handlePrev}>
          <IconArrowLeft />
        </ActionIcon>
        <Text
          size="xl"
          fw={900}
          // variant="gradient"
          // gradient={{ from: "orange", to: "yellow", deg: 90 }}
        >
          Août
        </Text>
        <ActionIcon onClick={handleNext}>
          <IconArrowRight />
        </ActionIcon>
      </Group>
      <Space h="xl" />
      <div style={{ display: "flex" }}>
        <Carousel
          getEmblaApi={setEmbla}
          classNames={classes}
          height="100%"
          style={{ flex: 1 }}
          loop
          // bg={"blue"}
        >
          <Carousel.Slide>
            <GridProduces />
          </Carousel.Slide>
          <Carousel.Slide>
            <GridProduces />
          </Carousel.Slide>
          <Carousel.Slide>
            <GridProduces />
          </Carousel.Slide>
          <Carousel.Slide>
            <GridProduces />
          </Carousel.Slide>
        </Carousel>
      </div>
    </>
  );
}