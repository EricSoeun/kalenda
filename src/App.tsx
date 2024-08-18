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
import { CarouselProduces } from "./components/Carousel/CarouselProduces";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Header />
        <>
          <Paper radius="xl" py="xl">
            <CarouselProduces />
          </Paper>
        </>
        <Footer />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
