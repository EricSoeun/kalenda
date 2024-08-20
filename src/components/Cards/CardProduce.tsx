import { Card, Image, Text, Group, Progress, Modal } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./CardProduce.module.css";

interface CardProduceProps {
  produceTitle: string;
  produceImage: string;
  startAt: number;
  endAt: number;
  remainingDays: number;
  spendingDays: number;
  totalDays: number;
}

export function CardProduce(props: CardProduceProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  const stats = [
    { title: "spendingDays", value: props.spendingDays },
    { title: "remainingDays", value: props.remainingDays },
    { title: "TotalDays", value: props.totalDays },
  ];

  const items = stats.map((stat) => (
    <div key={stat.title}>
      <Text size="xs" color="dimmed">
        {stat.title}
      </Text>
      <Text fw={500} size="sm">
        {stat.value}
      </Text>
    </div>
  ));

  const percentageRemaining = 100-((props.spendingDays / props.totalDays) * 100);

  return (
    <>
      <Card shadow="sm" padding="lg" radius="xl" withBorder onClick={open}>
        <Card.Section component="a">
          <Image
            src={
              props.produceImage ||
              "https://www.association-alimentation.fr/wp-content/uploads/pomme.png"
            }
            fit="cover"
            height={200}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{props.produceTitle}</Text>
        </Group>

        <Progress
          value={percentageRemaining}
          color="lime"
          mt="md"
          size="lg"
          radius="xl"
          striped
        />

        <Card.Section className={classes.footer}>{items}</Card.Section>
      </Card>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        radius={"lg"}
        transitionProps={{ transition: "scale", duration: 100 }}
        overlayProps={{
          backgroundOpacity: 0.45,
          blur: 2,
        }}
      >
        The Modal will be full screen only on mobile
      </Modal>
    </>
  );
}
