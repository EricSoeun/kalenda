import { useEffect, useState } from "react";
import classes from "./Island.module.css";
import classNames from "classnames";
import { Group, Progress, Stack, Text } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

export function Island() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [scroll] = useWindowScroll();

  scroll;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function hide() {
    setTimeout(() => classes.none, 1000);
  }

  return (
    <div className={classes.container}>
      <div className={classNames(classes.island, isShrunk && classes.shrink)}>
        <Group grow px={"lg"} className={scroll.y > 0 && hide() || ""}>
          <Stack>
            <Progress
              color="lime"
              mt="md"
              size="lg"
              radius="xl"
              striped
              value={85}
            />
            <Text m="auto" size={isShrunk ? "xs" : "sm"}>
              C'est la pleine saison !
            </Text>
          </Stack>
          <Stack>
            <Progress
              color="red"
              mt="md"
              size="lg"
              radius="xl"
              striped
              value={20}
            />
            <Text m="auto" size={isShrunk ? "xs" : "sm"}>
              C'est bientôt fini !
            </Text>
          </Stack>
        </Group>
      </div>
    </div>
  );
}
