import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./main.css";
import { MantineProvider, Paper } from "@mantine/core";
import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";
import { CarouselItems } from "./components/Carousel/CarouselItems";
import { GridItems } from "./components/Layout/Body/GridItems";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
