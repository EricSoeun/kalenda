import { Card, Image, Text, Group, Progress, Modal } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./CardProduce.module.css";
import { ModalProduceContent } from "../Modal/ModalProduceContent";

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

  const percentageRemaining =
    100 - (props.spendingDays / props.totalDays) * 100;

  return (
    <>
      <Card
        className={classes.card}
        // shadow="sm"
        padding="lg"
         radius="sm"
        // withBorder
        onClick={open}
      >
        <Card.Section component="a">
          <Image
            src={
              props.produceImage ||
              "https://www.association-alimentation.fr/wp-content/uploads/pomme.png"
            }
            fit="cover"
            height={150}
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

        {/* <Card.Section className={classes.footer}>{items}</Card.Section> */}
      </Card>
      <Modal
        classNames={{
          content: classes.modal,
          title: classes.modalTitle
        }}
        size={"xl"}
        opened={opened}
        onClose={close}
        title="Citron"
        fullScreen={isMobile}
        radius={"sm"}
        transitionProps={{ transition: "scale", duration: 100 }}
        overlayProps={{
          backgroundOpacity: 0.45,
          blur: 2,
        }}
      >
        <ModalProduceContent
          title={props.produceTitle}
          description={props.produceTitle}
        />
      </Modal>
    </>
  );
}
