import {
  Container,
  Group,
  Image,
  Progress,
  rem,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from "./Header.module.css";
import { useWindowScroll } from "@mantine/hooks";
import classNames from "classnames";
import logo3 from "./../../../assets/logo3.png";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";

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

export function Header() {
  const [
    monthDisplayed,
    // setMonthDisplayed
  ] = useState<number>(8);
  const [scroll] = useWindowScroll();
  return (
    <header
      className={classNames(
        classes.header,
        scroll.y > 50 && classes.headerShrink
      )}
    >
      <Container size="lg" py={"md"}>
        <Group
          grow
          // bg={"blue"}
          align="start"
        >
          <Group>
            <Title order={2}>Kalenda</Title>
            <Image src={logo3} style={{ height: "2rem" }} />
          </Group>

          <Stack display={"flex"} align="center" gap={0}>
            <Group
              // bg={"yellow"}
              // pb={"sm"}
              justify="flex-end"
              gap="xl"
              px={"md"}
              className={classNames(
                classes.island,
                scroll.y > 0 && classes.islandShrink,
                setTimeout(() => {
                  return classes.none;
                }, 1000)
              )}
            >
              <Stack gap={"xs"}>
                <Progress
                  color="lime"
                  mt="xs"
                  size="md"
                  radius="xl"
                  striped
                  value={85}
                />
                <Text m="auto" fw={500}>
                  C'est la pleine saison !
                </Text>
              </Stack>
              <Stack gap={"xs"}>
                <Progress
                  color="red"
                  mt="xs"
                  size="md"
                  radius="xl"
                  striped
                  value={20}
                />
                <Text m="auto">C'est bientôt fini !</Text>
              </Stack>
            </Group>
            <Group justify="center">
              <Text>◄</Text>
              <Text size="xl" fw={900}>
                {calendarMonths[monthDisplayed]}
              </Text>
              <Text>►</Text>
            </Group>
          </Stack>
          <Group
            // className={classes.search}
            // bg={"green"}
            justify="flex-end"
          >
            <IconSearch
              style={{ width: rem(32), height: rem(32) }}
              stroke={1.5}
            />
          </Group>
        </Group>
      </Container>
    </header>
  );
}
