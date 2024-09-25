import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./main.css";
import { MantineProvider } from "@mantine/core";
// import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";
import { CarouselProduces } from "./components/Carousel/CarouselProduces";
import { Header } from "./components/Layout/Header/Header";
import { Island } from "./components/Island/Island";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Header />
        {/* <Island /> */}
        <CarouselProduces />
        <Footer />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
