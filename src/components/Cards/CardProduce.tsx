import {
  Card,
  Image,
  Text,
  Group,
  Progress,
  Modal,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export function CardProduce() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <>
      <Card shadow="sm" padding="lg" radius="xl" withBorder onClick={open}>
        <Card.Section component="a">
          <Image
            // src="https://luchyprimeurs.com/183-large_default/pomme-red-chief.jpg"
            src="https://www.association-alimentation.fr/wp-content/uploads/pomme.png"
            // src="https://assets.gammvert.fr/image/fetch/w_auto,q_auto,f_auto,c_pad/https://images.ctfassets.net/b85ozb2q358o/34acdd126fba8f5a92db312da65c33324a98cb907326c4cf3800c8e270e1a25a/39a559b1089964d92303b3ce3e20fdd9/image.png"
            fit="cover"
            height={200}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Pomme</Text>
        </Group>

        <Progress
          value={54.31}
          color="lime"
          mt="md"
          size="lg"
          radius="xl"
          striped
        />
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
