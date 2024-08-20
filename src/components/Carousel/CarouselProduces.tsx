import { Carousel, Embla } from "@mantine/carousel";
import classes from "./CarouselProduces.module.css";
import { ActionIcon, Group, Space, Text } from "@mantine/core";
import { GridProduces } from "../Layout/Body/GridProduces";
import { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export function CarouselProduces() {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [monthDisplayed, setMonthDisplayed] = useState<number>(7);

  const handleNext = () => {
    setMonthDisplayed(monthDisplayed + 1);
    console.log("embla?.selectedScrollSnap(): ", embla?.selectedScrollSnap());

    embla?.scrollNext();
  };
  const handlePrev = () => {
    setMonthDisplayed(monthDisplayed - 1);
    embla?.scrollPrev();
  };

  const calendarMonths = [
    "Janvier", // 0
    "Février", // 1
    "Mars", // 2
    "Avril", // 3
    "Mai", // 4
    "Juin", // 5
    "Juillet", // 6
    "Août", // 7
    "Septembre", // 8
    "Octobre", // 9
    "Novembre", // 10
    "Décembre", // 11
  ];

  const calendarSlide = (
    <Carousel.Slide>
      <GridProduces />
    </Carousel.Slide>
  );

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
          {calendarMonths[embla?.selectedScrollSnap() ?? monthDisplayed]}
        </Text>
        <ActionIcon onClick={handleNext}>
          <IconArrowRight />
        </ActionIcon>
      </Group>
      <Space h="xl" />
      <Carousel
        getEmblaApi={setEmbla}
        classNames={classes}
        height="100%"
        loop
      >
        {calendarMonths.map(() => calendarSlide)}
      </Carousel>
    </>
  );
}
