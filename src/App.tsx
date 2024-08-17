import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./main.css"
import { MantineProvider, Paper } from "@mantine/core";
import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";
import { CarouselItems } from "./components/Carousel/CarouselItems";

function App() {
  return (
    <MantineProvider>
      <Header />
      <>
        <Paper radius="xl" py="xl">
          <CarouselItems />
        </Paper>
        {/* <GridItems /> */}
      </>
      <Footer />
    </MantineProvider>
  );
}

export default App;
